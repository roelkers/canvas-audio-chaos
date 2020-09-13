import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { OscConfig } from '../nodeCreators/osc'
import { NodeCreator } from '../nodeCreators'
import { FilterConfig } from '../nodeCreators/filter'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
import { SimpleFilterConfig } from '../nodeCreators/filter_simple'


export interface AudioConfig {
  nodeCreator: NodeCreator; 
  output: string;
  params: OscConfig | FilterConfig | AttackReleaseOscConfig | SimpleFilterConfig 
}

export type AudioRecord = Record<number, AudioConfig>

export interface IPaletteElement {
  elementId: string;
  groups: string[];
  behaviour: 'Trigger' | 'Listener' | 'ListenerTrigger'
  audio: AudioRecord 
}

interface CanvasState {
  nextId: number;
  elements: IPaletteElement[];
}

const initialState: CanvasState = {
  nextId: 2,
  elements: [
    {
      elementId: '0',
      behaviour: 'Trigger',
      groups: ['0'],
      audio: {
        0: {
          nodeCreator: 'osc',
          output: 'output',
          params: {
            frequency: 110,
            gain: 0.2,
            stopTime: 1,
            type: 'square',
          } as OscConfig
        }
      }
    },
    // { elementId : '0', behaviour: 'Listener', groups: ['0'] },
    // { elementId : '0',  behaviour: 'ListenerTrigger', groups: ['0'] },
    // { elementId : '0', behaviour: 'Trigger', groups: ['0'] },
    // { elementId : '0', behaviour: 'Trigger', groups: ['0'] },
    // { elementId : '0', behaviour: 'Listener', groups: ['0'] },
    // { elementId : '0', behaviour: 'Trigger', groups: ['0'] }
  ],
}

const canvasSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
  }
})

export const selectPaletteElements = (state: RootState) => state.palette.elements

const { actions, reducer } = canvasSlice

export default reducer

