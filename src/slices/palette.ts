import { createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { RootState } from '../store'

export interface IPaletteElement {
  id: string;
  group: string;
  behaviour: 'Trigger' | 'Listener' | 'ListenerTrigger'  
}

interface CanvasState {
  nextId: number;
  elements: IPaletteElement [];
}

const initialState : CanvasState = {
  nextId: 2,
  elements: [
    { id : '0', behaviour: 'Trigger', group: '0' },
    { id : '0', behaviour: 'Listener', group: '0' },
    { id : '0',  behaviour: 'ListenerTrigger', group: '0' },
    { id : '0', behaviour: 'Trigger', group: '0' },
    { id : '0', behaviour: 'Trigger', group: '0' },
    { id : '0', behaviour: 'Listener', group: '0' },
    { id : '0', behaviour: 'Trigger', group: '0' }
  ],
}

const canvasSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
  }
})

export const selectPaletteElements = (state : RootState) => state.palette.elements

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
// Export the reducer, either as a default or named export
export default reducer

