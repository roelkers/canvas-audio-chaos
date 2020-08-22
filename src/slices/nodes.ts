import { createSlice, PayloadAction } from '@reduxjs/toolkit' 

const initialState : number [] = []

const postsSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    createNode(state, action: PayloadAction<number>) {
      state.push(action.payload)
    },
    updateNode(state, action) {

    },
    deleteNode(state, action) {

    }
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createNode, updateNode, deleteNode } = actions
// Export the reducer, either as a default or named export
export default reducer