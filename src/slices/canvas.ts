import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AudioConfig, IPaletteElement } from './palette'
import { propOr, prop, zipWith, merge, sortBy, compose, toLower, nth, map, intersection, isEmpty, addIndex, contains, filter, find, propEq } from 'ramda'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
import { SimpleFilterConfig } from '../nodeCreators/filter_simple'
import { arEnvelopeConfig } from '../nodeCreators/arEnvelope'
import { OscConfig } from '../nodeCreators/osc'
import { FilterConfig } from '../nodeCreators/filter'

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

const initialState: Canvas = {
  canvasHover: true,
  historyStep: 0,
  nonHistory: {
    focus: '0',
    nodes: [
      {
        id: '0', active: false, startTime: null,
        collapsedAudioNodeSettingsIndexes: [0]
      },
      {
        id: '1', active: false, startTime: null,
        collapsedAudioNodeSettingsIndexes: [0]
      },
    ]
  },
  history: [{
    nextId: 2,
    nodes: [
      {
        id: '0',
        elementId: '0',
        groups: ['0', '1', '2', '3'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        x: 0, y: 0,
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
              type: '',
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
      },
      {
        id: '1',
        elementId: '0',
        groups: ['0', '1', '2', '3'],
        periodicTrigger: true,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        x: 0, y: 200,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.05,
              release: 0.1
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 2520,
              type: '',
              resonance: 15
            } as SimpleFilterConfig,

          }
        }
      },
    ],
  }]
}

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
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
      state.history.push(nextState)
      state.nonHistory.nodes.push({ id: nextId, active: false, startTime: null, collapsedAudioNodeSettingsIndexes: [] })
      state.historyStep += 1
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
      history.push(nextState)
      state.history = history
      state.historyStep += 1
    },
    undo(state, action) {
      if (state.historyStep === 0) {
        return
      }
      state.historyStep -= 1
    },
    redo(state, action) {
      if (state.historyStep === state.history.length - 1) {
        return
      }
      state.historyStep += 1
    },
    focus(state, action) {
      if (action.payload === 'none') return
      state.nonHistory.focus = action.payload
    },
    updateNode(state, action) {

    },
    deleteNode(state, action) {

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
      const { nodeId, startTime, stopTime } = action.payload
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
      history.push(nextState)
      state.history = history
      state.historyStep += 1
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
      history.push(nextState)
      state.history = history
      state.historyStep += 1
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
      history.push(nextState)
      state.history = history
      state.historyStep += 1
    },
    setAudioParams(state, action) {
      const { nodeId, params, virtualAudioNodeIndex } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const mapper = addIndex(map) as (func: (audio: AudioConfig, index: number) => any, audio: AudioConfig[]) => AudioConfig[]
      const audioSetter = (audio: AudioConfig, index: number) => index === virtualAudioNodeIndex ?
        {
          ...audio,
          params
        } : audio

      const nodeSetter = (node: INodeHistoric) => node.id === nodeId ?
        {
          ...node,
          audio: mapper(audioSetter, node.audio as AudioConfig[])
        } : node

      const nextState = {
        ...prev,
        nodes: map(nodeSetter, prev.nodes)
      }
      history.push(nextState)
      state.history = history
      state.historyStep += 1
    },
    setCollapseAudioNodeSettings(state, action) {
      const { collapsed, nodeId, virtualAudioNodeIndex } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === nodeId)
      console.log(node)
      if (node) {
        const containsIndex = contains( virtualAudioNodeIndex, node.collapsedAudioNodeSettingsIndexes)
        console.log(containsIndex)
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

export const selectHistoricNodes = (state: RootState) => <INodeHistoric[]>compose(
  sortById,
  propOr([], 'nodes'),
  nth(state.canvas.historyStep))
  (state.canvas.history)

export const selectNonHistoricNodes = (state: RootState) => sortById(state.canvas.nonHistory.nodes)
export const selectNodes = createSelector(
  [selectHistoricNodes, selectNonHistoricNodes],
  (historicNodes, nonHistoricNodes) => <INode[]><unknown>zipWith(merge, historicNodes, nonHistoricNodes)
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
export const { createNode, updateNode, setNodeStartTime, deleteNode,
  activateNode, deactivateNode, dragNode, undo, redo, focus, initialCanvasHover,
  setTriggerBehaviour, setVelocity, setGroups, setAudioParams,
  setCollapseAudioNodeSettings } = actions
// Export the reducer, either as a default or named export
export default reducer

