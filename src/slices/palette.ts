import { createSlice } from '@reduxjs/toolkit'
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
  periodicTrigger: boolean;
  activeTrigger: boolean;
  soundOnActivate: boolean;
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
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
            
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

