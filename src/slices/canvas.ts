import { createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { RootState } from '../store'

export interface INode {
  id: string;
  active: boolean;
}

interface CanvasState {
  nextId: number;
  nodes: INode [];
}

const initialState : CanvasState = {
  nextId: 2,
  nodes: [
    { id : '0', active: false },
    { id : '1', active: false },
  ],
}

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    createNode(state, action: PayloadAction<null>) {
      state.nodes.push({
        id: String(state.nextId),
        active: false
      }) 
      state.nextId = state.nextId + 1
    },
    updateNode(state, action) {

    },
    deleteNode(state, action) {

    },
    activateNode(state, action) {
      const node = state.nodes.find(n => n.id === action.payload.id)
      console.log(node)
      if(node) {
         node.active = true
      }
    },
    deactivateNode(state, action) {
      const node = state.nodes.find(n => n.id === action.payload.id)
      console.log(node)
      if(node) {
         node.active = false
      }
    }
  }
})

export const selectNodes = (state : RootState) => state.canvas.nodes

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
export const { createNode, updateNode, deleteNode, activateNode, deactivateNode } = actions
// Export the reducer, either as a default or named export
export default reducer

