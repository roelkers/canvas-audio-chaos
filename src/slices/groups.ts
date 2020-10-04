import { createSlice } from '@reduxjs/toolkit' 
import { RootState } from '../store'

export interface IGroup {
  id: string;
  fill: string;
}

const initialState : IGroup[] = 
  [
    { id: '0', fill: '#C972DB'},
    { id: '1', fill: '#66DBAC'},
    { id: '2', fill: '#729BDB'},
    { id: '3', fill: '#DBAE51'},
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

export const selectGroups = (state : RootState) => state.groups

// Extract the action creators object and the reducer
const { 
  // actions, 
  reducer
 } = canvasSlice
// Extract and export each action creator by name
// Export the reducer, either as a default or named export
export default reducer

