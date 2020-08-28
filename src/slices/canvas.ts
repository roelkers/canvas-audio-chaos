import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IPaletteElement } from './palette'

export interface INode extends IPaletteElement {
  id: string;
  active: boolean;
}

interface CanvasState {
  nextId: number;
  nodes: INode[];
}

const initialState: CanvasState = {
  nextId: 2,
  nodes: [
    {
      id: '0', active: false,
      elementId: '0', behaviour: 'Trigger', groups: ['0'],
    },
    {
      id: '1', active: false,
      elementId: '0', behaviour: 'Trigger', groups: ['0'],
    },
    {
      id: '2', active: false,
      elementId: '0', behaviour: 'Trigger', groups: ['0'],
    },
    {
      id: '3', active: false,
      elementId: '0', behaviour: 'Trigger', groups: ['0'],
    }
  ],
}

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    createNode(state, action) {
      state.nodes.push({
        id: String(state.nextId),
        ...action.payload
      })
      state.nextId = state.nextId + 1
    },
    updateNode(state, action) {

    },
    deleteNode(state, action) {

    },
    activateNode(state, action) {
      const { targetNodeId, waveId } = action.payload
      const node = state.nodes.find(n => n.id === targetNodeId)
      if (node) {
        node.active = true
      }
    },
    deactivateNode(state, action) {
      const { targetNodeId, waveId } = action.payload
      const node = state.nodes.find(n => n.id === targetNodeId)
      if (node) {
        node.active = false
      }
    }
  }
})

export const selectNodes = (state: RootState) => state.canvas.nodes

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
export const { createNode, updateNode, deleteNode, activateNode, deactivateNode } = actions
// Export the reducer, either as a default or named export
export default reducer

