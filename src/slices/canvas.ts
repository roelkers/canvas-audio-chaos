import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IPaletteElement } from './palette'
import { propOr, prop, zipWith, merge, sortBy, compose, toLower, nth, map } from 'ramda'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
import { SimpleFilterConfig } from '../nodeCreators/filter_simple'
import { OscConfig } from '../nodeCreators/osc'

export interface INodeHistoric extends IPaletteElement {
  id: string;
  x: number;
  y: number;
}

export interface INodeNonHistoric {
  id: string;
  active: boolean;
  startTime: number | null;
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
  focussedNode: string;
  nodes: INodeNonHistoric[];
}

const initialState: Canvas = {
  canvasHover: true,
  historyStep: 0,
  nonHistory: {
    focussedNode: '',
    nodes: [
      {
        id: '0', active: false, startTime: null
      },
      {
        id: '1', active: false, startTime: null
      },
    ]
  },
  history: [{
    nextId: 2,
    nodes: [
      {
        id: '0',
        elementId: '0', behaviour: 'Trigger', groups: ['0'],
        x: 0, y: 0,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: 'output',
            params: {
              frequency: 264,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.1,
              release : 0.2 
            } as AttackReleaseOscConfig
          }
        }
      },
      {
        id: '1',
        elementId: '0', behaviour: 'Trigger', groups: ['0'],
        x: 0, y: 200,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.05,
              release : 0.1 
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
      // {
      //   id: '2',
      //   elementId: '0', behaviour: 'Trigger', groups: ['0'],
      //   x: 200, y: 0
      // },
      // {
      //   id: '3',
      //   elementId: '0', behaviour: 'Trigger', groups: ['0'],
      //   x: 200, y: 200
      // }
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
      state.nonHistory.nodes.push({ id: nextId, active: false, startTime: null })
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
    focusNode(state, action) {
      if (action.payload === 'none') return
      state.nonHistory.focussedNode = action.payload
    },
    updateNode(state, action) {

    },
    deleteNode(state, action) {

    },
    activateNode(state, action) {
      const { targetNodeId } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === targetNodeId)
      if (node) {
        node.active = true
      }
    },
    deactivateNode(state, action) {
      const { targetNodeId } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === targetNodeId)
      if (node) {
        node.active = false
      }
    },
    setNodeStartTime(state,action) {
      const { nodeId, startTime, stopTime } = action.payload
      const node = state.nonHistory.nodes.find(n => n.id === nodeId)
      if (node) {
        node.startTime = startTime
      }
    },
    initialCanvasHover(state,action) {
      state.canvasHover = true
    }
  }
})

const sortById = sortBy(compose(toLower, prop('id')))

export const selectHistoricNodes = (state: RootState) => <CanvasStateHistoric[]>compose(
  sortById,
  propOr([], 'nodes'),
  nth(state.canvas.historyStep))
  (state.canvas.history)

export const selectNonHistoricNodes = (state: RootState) => sortById(state.canvas.nonHistory.nodes)
export const selectNodes = createSelector(
  [selectHistoricNodes, selectNonHistoricNodes],
  (historicNodes, nonHistoricNodes) => <INode[]><unknown>zipWith(merge, historicNodes, nonHistoricNodes)
)

export const selectFocussedNodeId = (state: RootState) => state.canvas.nonHistory.focussedNode

export const selectInitialCanvasHover = (state: RootState) => state.canvas.canvasHover

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
export const { createNode, updateNode, setNodeStartTime, deleteNode, 
  activateNode, deactivateNode, dragNode, undo, redo, focusNode, initialCanvasHover } = actions
// Export the reducer, either as a default or named export
export default reducer

