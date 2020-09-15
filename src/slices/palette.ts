import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { OscConfig } from '../nodeCreators/osc'
import { NodeCreator } from '../nodeCreators'
import { FilterConfig } from '../nodeCreators/filter'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
import { SimpleFilterConfig } from '../nodeCreators/filter_simple'
import testPalette from '../assets/testPalette'

export interface AudioConfig {
  nodeCreator: NodeCreator; 
  output: string;
  params: OscConfig | FilterConfig | AttackReleaseOscConfig | SimpleFilterConfig 
}

export type AudioRecord = Record<number, AudioConfig>

export interface IPaletteElement {
  elementId: string;
  groups: string[];
  periodicTrigger: boolean;
  activeTrigger: boolean;
  soundOnActivate: boolean;
  audio: AudioRecord 
}

export interface ICanvasState {
  nextId: number;
  elements: IPaletteElement[];
}

const initialState: ICanvasState = testPalette 

const canvasSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
  }
})

export const selectPaletteElements = (state: RootState) => state.palette.elements

const { actions, reducer } = canvasSlice

export default reducer

