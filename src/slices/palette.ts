import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Params, NodeCreator } from '../nodeCreators'
import testPalette from '../assets/testPalette'
import { INode, INodeHistoric, INodeNonHistoric } from './canvas'
import { find, merge, pick, propEq } from 'ramda'

export interface AudioConfig {
  nodeCreator: NodeCreator;
  output: string;
  params: Params
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

export const initialPaletteState: ICanvasState = testPalette
//  const initialState: ICanvasState = {
//    nextId: 0,
//    elements: []
//  } 

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
      const idx = state.elements.findIndex(e => e.elementId = node.elementId)
      if(idx !== -1) {
        state.elements[idx] = updatedElement
      } 
    }
  }
})

export const selectPaletteElements = (state: RootState) => state.palette.elements

const { actions, reducer } = canvasSlice

export const { saveNodeAsElement } = actions
export default reducer

