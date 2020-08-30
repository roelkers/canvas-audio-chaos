import { createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { RootState } from '../store'

interface IActionState {
  open: boolean;
  action: string;
}

const initialState : IActionState = 
    {
      open: false,
      action: ''
    }


const canvasSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setOpen (state, action) {
      state.open = action.payload
    },
    setAction (state, action) {
      state.action = action.payload
    }
  }
})

export const selectIsSpeedDialOpen = (state: RootState) => state.action.open  
export const selectActionName = (state: RootState) => state.action.action  

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
// Export the reducer, either as a default or named export
export const { setOpen, setAction } = actions 

export default reducer

