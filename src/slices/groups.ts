import { createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { RootState } from '../store'

interface IGroup {
  id: string;
  fill: string;
}

const initialState : IGroup[] = 
  [
    { id: '0', fill: '00ff00'},
  ]

const canvasSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const selectPaletteElements = (state : RootState) => state.palette.elements

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
// Export the reducer, either as a default or named export
export default reducer

