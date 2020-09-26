import { configureStore } from '@reduxjs/toolkit'
import canvas from '../slices/canvas'
import palette from '../slices/palette'
import app from '../slices/app'
import groups from '../slices/groups'
import globalAudio from '../slices/global-audio'

const store = configureStore({
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