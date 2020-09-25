import { createSlice } from '@reduxjs/toolkit' 
import { RootState } from '../store'
import { Scale } from '@tonaljs/tonal'

interface IGlobalAudioState {
  scale: string[]
}

const initialState : IGlobalAudioState = 
    {
      scale: Scale.get("C major").notes
    }

const canvasSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
  }
})

export const selectScale = (state: RootState) => state.globalAudio.scale 

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
// Export the reducer, either as a default or named export
export const { } = actions 

export default reducer

