import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IPaletteElement } from './palette'
import { propOr, prop, zipWith, merge, sortBy, compose, toLower, nth, map } from 'ramda'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
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
  canvasHover: false,
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
      // {
      //   id: '2', active: false,
      // },
      // {
      //   id: '3', active: false,
      // }
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
              frequency: 110,
              gain: 0.2,
              type: 'square',
              attack : 0.1,
              release : 5 
            } as AttackReleaseOscConfig
          }
        }
      },
      {
        id: '1',
        elementId: '0', behaviour: 'Trigger', groups: ['0'],
        x: 0, y: 200,
        audio: {
          1: {
            nodeCreator: 'osc',
            output: 'output',
            params: {
              frequency: 110,
              gain: 0.2,
              stopTime: 1,
              type: 'square',
            } as OscConfig
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
      const prev = history[state.historyStep - 1]
      const nextState = {
        ...prev,
        nodes: [
          ...prev.nodes,
          {
            id: String(prev.nextId),
            ...action.payload
          }
        ],
        nextId: prev.nextId + 1
      }
      state.history.push(nextState)
      state.historyStep += 1
    },
    dragNode(state, action) {
      const { x, y, targetNodeId } = action.payload
      const history = state.history.slice(0, state.historyStep + 1)
      const prev = history[state.historyStep]
      const moveNode = (node: INodeHistoric) => node.id === targetNodeId ? { ...node, x, y } : node
      const nextState = {
        ...prev,
        nodes: map(moveNode, prev.nodes),
        nextId: prev.nextId + 1
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
      const { nodeId, startTime } = action.payload
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

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
export const { createNode, updateNode, setNodeStartTime, deleteNode, 
  activateNode, deactivateNode, dragNode, undo, redo, focusNode } = actions
// Export the reducer, either as a default or named export
export default reducer

