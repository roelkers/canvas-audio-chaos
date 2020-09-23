import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Config, NodeCreator } from '../nodeCreators'
import testPalette from '../assets/testPalette'

export interface AudioConfig {
  nodeCreator: NodeCreator; 
  output: string;
  params: Config
}

export type AudioRecord = Record<number, AudioConfig>

export interface IPaletteElement {
  elementId: string;
  groups: string[];
  periodicTrigger: boolean;
  activeTrigger: boolean;
  soundOnActivate: boolean;
  velocity: number;
  audio: AudioRecord 
}

export interface ICanvasState {
  nextId: number;
  elements: IPaletteElement[];
}

const initialState: ICanvasState = testPalette 
//  const initialState: ICanvasState = {
//    nextId: 0,
//    elements: []
//  } 

const canvasSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
  }
})

export const selectPaletteElements = (state: RootState) => state.palette.elements

const { actions, reducer } = canvasSlice

export default reducer

