import { configureStore } from '@reduxjs/toolkit'
import canvas  from '../slices/canvas'
import palette, { initialPaletteState } from '../slices/palette'
import app from '../slices/app'
import groups from '../slices/groups'
import globalAudio from '../slices/global-audio'

import thunkMiddleware from 'redux-thunk'

const getSavedPalette = () => {
  const palette = localStorage.getItem('palette')
  return palette ? JSON.parse(palette) : initialPaletteState
}

const preloadedState = {
  palette: getSavedPalette() 
}

const store = configureStore({
  middleware: [thunkMiddleware],
  preloadedState,
  reducer: {
    canvas,
    palette,
    app,
    groups,
    globalAudio 
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>