import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AudioConfig, IPaletteElement } from './palette'
import { propOr, prop, zipWith, merge, sortBy, compose, toLower, nth, map, 
  intersection, isEmpty, addIndex, contains, filter, find, propEq, difference, 
  includes, takeLast } from 'ramda'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
import { SimpleFilterConfig } from '../nodeCreators/filter_simple'
import { arEnvelopeConfig } from '../nodeCreators/arEnvelope'
import nodeCreator, { OscConfig } from '../nodeCreators/osc'
import { FilterConfig } from '../nodeCreators/filter'
import { NodeCreator } from '../nodeCreators'

const HISTORY_MAX_LENGTH = 50 

export interface INodeHistoric extends IPaletteElement {
  id: string;
  x: number;
  y: number;
}

export interface INodeNonHistoric {
  id: string;
  active: boolean;
  startTime: number | null;
  collapsedAudioNodeSettingsIndexes: number[]
}

export interface INode extends INodeHistoric, INodeNonHistoric { }

interface CanvasStateHistoric {
  nextId: number;
  nodes: INodeHistoric[];
}

interface Canvas {
  canvasHover: boolean;
  historyStep: number;
  history: CanvasStateHistoric[],
  nonHistory: CanvasStateNonHistoric
}

interface CanvasStateNonHistoric {
  focus: string;
  nodes: INodeNonHistoric[];
}

export const canvasInitialState: Canvas = {
  canvasHover: true,
  historyStep: 0,
  nonHistory: {
    focus: '0',
    nodes: [
      {
        id: '0', active: false, startTime: null,
        collapsedAudioNodeSettingsIndexes: []
      }
    ]
  },
  history: [{
    nextId: 1,
    nodes: [
      {
        id: '0',
        elementId: '0',
        groups: ['0', '1', '2', '3'],
        periodicTrigger: true,
        activeTrigger: false,
        soundOnActivate: true,
        velocity: 240,
        x: 150, y: 150,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      }
    ],
  }]
}

const pushToHistory = (hist: CanvasStateHistoric[], step: CanvasStateHistoric) => 
  takeLast(HISTORY_MAX_LENGTH, [...hist, step]) 

const incrementHistoryStep = (historyStep :number) => 
  historyStep +1 === HISTORY_MAX_LENGTH ? historyStep : historyStep + 1


const canvasSlice = createSlice({
  name: 'canvas',
  initialState: canvasInitialState,
  reducers: {
    createNode(state, action) {
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const nextId = String(prev.nextId)
      const nextState = {
        ...prev,
        nodes: [
          ...prev.nodes,
          {
            id: nextId,
            ...action.payload
          }
        ],
        nextId: prev.nextId + 1
      }
      state.history = pushToHistory(state.history, nextState)
      state.nonHistory.nodes.push({ id: nextId, active: false, startTime: null, collapsedAudioNodeSettingsIndexes: [] })
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    cloneNode(state, action) {
      const focussedNodeId = state.nonHistory.focus
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const nextId = String(prev.nextId)
      const existingNode = find((node: INodeHistoric) => node.id === focussedNodeId, prev.nodes)
      if(!existingNode) return
      const clone = JSON.parse(JSON.stringify(existingNode))
      clone.x = clone.x + 60
      clone.id = nextId
      const nextState = {
        ...prev,
        nodes: [...prev.nodes, clone],
        nextId: prev.nextId + 1
      }
      state.history = pushToHistory(state.history, nextState)
      state.nonHistory.nodes.push({ id: nextId, active: false, startTime: null, collapsedAudioNodeSettingsIndexes: [] }) 
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    dragNode(state, action) {
      const { x, y, targetNodeId } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const moveNode = (node: INodeHistoric) => node.id === targetNodeId ? { ...node, x, y } : node
      const nextState = {
        ...prev,
        nodes: map(moveNode, prev.nodes)
      }
      state.history = pushToHistory(state.history, nextState)
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    undo(state, action) {
      if (state.historyStep === 0) {
        return
      }
      //Have to add node to nonhistory to prevent bug where it exists in historic states but not in nonhistoric
      const stepBefore = state.history[state.historyStep-1]
      const idMapper = map(prop('id')) 
      const diff = difference(idMapper(stepBefore.nodes),idMapper(state.nonHistory.nodes))
      if(!isEmpty(diff)) {
         const addNodes= diff.map(id => ({ id, active: false, startTime: null, collapsedAudioNodeSettingsIndexes: []}))
         state.nonHistory.nodes = state.nonHistory.nodes.concat(addNodes
         )
      }
      state.historyStep -= 1
    },
    redo(state, action) {
      if (state.historyStep === state.history.length - 1) {
        return
      }
      //Have to remove node from nonhistory to prevent bug where it exists in nonhistoric state but not in historic
      const stepAfter = state.history[state.historyStep+1]
      if(stepAfter) {
        const idMapper = map(prop('id')) 
        const diff = difference(idMapper(state.nonHistory.nodes),idMapper(stepAfter.nodes))
        if(!isEmpty(diff)) {
           state.nonHistory.nodes = filter(n =>  !includes(n.id, diff), state.nonHistory.nodes)
        }
      }
      state.historyStep += 1
    },
    focus(state, action) {
      if (action.payload === 'none') return
      state.nonHistory.focus = action.payload
    },
    deleteNode(state, action) {
      const focussedNodeId = state.nonHistory.focus
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const filterNode = (node: INodeHistoric | INodeNonHistoric) => node.id !== focussedNodeId
      const nextState = {
        ...prev,
        nodes: filter(filterNode, prev.nodes)
      }
      state.history = pushToHistory(state.history, nextState)
      state.nonHistory.nodes = filter(filterNode,state.nonHistory.nodes)
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    activateNode(state, action) {
      const { targetNodeId, sourceNodeId } = action.payload
      const targetNodeNonHistoric = state.nonHistory.nodes.find(n => n.id === targetNodeId)
      const targetNodeHistoric = state.history[state.historyStep].nodes.find(n => n.id === targetNodeId)
      const sourceNodeHistoric = state.history[state.historyStep].nodes.find(n => n.id === sourceNodeId)

      if (targetNodeNonHistoric && targetNodeHistoric && sourceNodeHistoric) {
        if (!isEmpty(intersection(targetNodeHistoric.groups, sourceNodeHistoric.groups))) {
          targetNodeNonHistoric.active = true
        }
      }
    },
    deactivateNode(state, action) {
      const { targetNodeId } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === targetNodeId)
      if (node) {
        node.active = false
      }
    },
    setNodeStartTime(state, action) {
      const { nodeId, startTime } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === nodeId)
      if (node) {
        node.startTime = startTime
      }
    },
    initialCanvasHover(state, action) {
      state.canvasHover = true
    },
    setTriggerBehaviour(state, action) {
      const { nodeId, periodicTrigger, activeTrigger } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const setTrigger = (node: INodeHistoric) => node.id === nodeId ? { ...node, periodicTrigger, activeTrigger } : node
      const nextState = {
        ...prev,
        nodes: map(setTrigger, prev.nodes)
      }
      state.history = pushToHistory(state.history, nextState)
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    setVelocity(state, action) {
      const { nodeId, velocity } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const setVelocity = (node: INodeHistoric) => node.id === nodeId ? { ...node, velocity } : node
      const nextState = {
        ...prev,
        nodes: map(setVelocity, prev.nodes)
      }
      state.history = pushToHistory(state.history, nextState)
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    setGroups(state, action) {
      const { nodeId, groups } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const setGroups = (node: INodeHistoric) => node.id === nodeId ? { ...node, groups } : node
      const nextState = {
        ...prev,
        nodes: map(setGroups, prev.nodes)
      }
      state.history = pushToHistory(state.history, nextState)
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    setAudioParams(state, action) {
      const { nodeId, params, virtualAudioNodeIndex } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const mapper = addIndex(map) as (func: (audio: AudioConfig<NodeCreator>, index: number) => any, audio: AudioConfig<NodeCreator>[]) => AudioConfig<NodeCreator>[]
      const audioSetter = (audio: AudioConfig<NodeCreator>, index: number) => index === virtualAudioNodeIndex ?
        {
          ...audio,
          params
        } : audio

      const nodeSetter = (node: INodeHistoric) => node.id === nodeId ?
        {
          ...node,
          audio: mapper(audioSetter, node.audio as AudioConfig<NodeCreator>[])
        } : node

      const nextState = {
        ...prev,
        nodes: map(nodeSetter, prev.nodes)
      }
      state.history = pushToHistory(state.history, nextState)
      state.historyStep = incrementHistoryStep(state.historyStep)
    },
    setCollapseAudioNodeSettings(state, action) {
      const { collapsed, nodeId, virtualAudioNodeIndex } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === nodeId)
      if (node) {
        const containsIndex = contains( virtualAudioNodeIndex, node.collapsedAudioNodeSettingsIndexes)
        if(collapsed && !containsIndex)  {
          node.collapsedAudioNodeSettingsIndexes = [ ...node.collapsedAudioNodeSettingsIndexes, virtualAudioNodeIndex] 
        } else if (!collapsed && containsIndex) {
          node.collapsedAudioNodeSettingsIndexes = filter((i) => i !== virtualAudioNodeIndex, node.collapsedAudioNodeSettingsIndexes) 
        }
      }
    }
  },
})

const sortById = sortBy(compose(toLower, prop('id')))

export const selectHistoricNodes = (state: RootState) => 
compose(
  sortById,
  propOr([], 'nodes'),
  nth(state.canvas.historyStep))
  (state.canvas.history) as INodeHistoric[]

export const selectNonHistoricNodes = (state: RootState) => sortById(state.canvas.nonHistory.nodes)
export const selectNodes = createSelector(
  [selectHistoricNodes, selectNonHistoricNodes],
  (historicNodes, nonHistoricNodes) => zipWith(merge, historicNodes, nonHistoricNodes) as unknown as INode[]
)

export const selectFocus = (state: RootState) => state.canvas.nonHistory.focus
export const selectFocussedNode = createSelector(
  [selectHistoricNodes, selectFocus],
  (nodes, id) => nodes.find(n => n.id === id)
)

export const selectInitialCanvasHover = (state: RootState) => state.canvas.canvasHover

export const selectCollapsedAudioNodeSettings = (nodeId: string) => 
 createSelector([selectNonHistoricNodes], (nodes) => find(propEq('id', nodeId),nodes)?.collapsedAudioNodeSettingsIndexes)

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
export const { createNode, setNodeStartTime, deleteNode,
  activateNode, deactivateNode, dragNode, undo, redo, focus, initialCanvasHover,
  setTriggerBehaviour, setVelocity, setGroups, setAudioParams,
  setCollapseAudioNodeSettings, cloneNode } = actions
// Export the reducer, either as a default or named export
export default reducer

