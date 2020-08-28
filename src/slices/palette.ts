import { createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { RootState } from '../store'

export interface IPaletteElement {
  elementId: string;
  groups: string[];
  behaviour: 'Trigger' | 'Listener' | 'ListenerTrigger'  
}

interface CanvasState {
  nextId: number;
  elements: IPaletteElement [];
}

const initialState : CanvasState = {
  nextId: 2,
  elements: [
    { elementId : '0', behaviour: 'Trigger', groups: ['0'] },
    { elementId : '0', behaviour: 'Listener', groups: ['0'] },
    { elementId : '0',  behaviour: 'ListenerTrigger', groups: ['0'] },
    { elementId : '0', behaviour: 'Trigger', groups: ['0'] },
    { elementId : '0', behaviour: 'Trigger', groups: ['0'] },
    { elementId : '0', behaviour: 'Listener', groups: ['0'] },
    { elementId : '0', behaviour: 'Trigger', groups: ['0'] }
  ],
}

const canvasSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
  }
})

export const selectPaletteElements = (state : RootState) => state.palette.elements

const { actions, reducer } = canvasSlice

export default reducer

