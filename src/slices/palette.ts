import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { NodeCreator, NodeCreators } from '../nodeCreators'
import palette from '../assets/v1.1Palette'
import { INodeHistoric } from './canvas'
import { pick } from 'ramda'

export interface AudioConfig<T extends keyof NodeCreators> {
  nodeCreator: T;
  output: string;
  params: NodeCreators[T] 
}

export type AudioRecord<T extends keyof NodeCreators> = Record<number, AudioConfig<T>>

export interface IPaletteElement {
  elementId: string;
  groups: string[];
  periodicTrigger: boolean;
  activeTrigger: boolean;
  soundOnActivate: boolean;
  velocity: number;
  audio: AudioRecord<NodeCreator> 
}

export interface IPaletteElementBasic extends IPaletteElement {
  elementId: string;
  groups: string[];
  periodicTrigger: boolean;
  activeTrigger: boolean;
  soundOnActivate: boolean;
  velocity: number;
  audio: {
    0: AudioConfig<'osc'>,
    1: AudioConfig<'filter'>,
    2: AudioConfig<'arEnvelope'>
  } 
}

export interface ICanvasState {
  nextId: number;
  elements: IPaletteElementBasic[] 
}

export const initialPaletteState: ICanvasState = palette

export const saveNodeAsElementAndSavePalette = createAsyncThunk(
  'palette/savePalette',
  async (node: INodeHistoric | undefined, { getState, dispatch }) => {
    await dispatch(saveNodeAsElement(node)); 
    const state = getState() as RootState
    const palette = state.palette
    localStorage.setItem('palette', JSON.stringify(palette))
  } 
)

const canvasSlice = createSlice({
  name: 'palette',
  initialState: initialPaletteState,
  reducers: {
    saveNodeAsElement(state, action) {
      const node = action.payload as INodeHistoric | undefined
      console.log(node)
      if(!node) return
      const updatedElement : IPaletteElement = pick([
        'elementId', 
        'groups',
        'periodicTrigger',
        'activeTrigger',
        'soundOnActivate',
        'velocity',
        'audio',
       ], node)
      const idx = state.elements.findIndex(e => e.elementId === node.elementId)
      if(idx !== -1) {
        state.elements[idx] = updatedElement as IPaletteElementBasic 
      } 
    }
  }
})

export const selectPaletteElements = (state: RootState) => state.palette.elements

const { actions, reducer } = canvasSlice

export const { saveNodeAsElement } = actions
export default reducer

