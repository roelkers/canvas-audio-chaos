import { configureStore } from '@reduxjs/toolkit'
import canvas from '../slices/canvas'
import palette from '../slices/palette'
import action from '../slices/action-buttons'

const store = configureStore({
  reducer: {
    canvas,
    palette,
    action
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>