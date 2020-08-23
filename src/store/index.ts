import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import canvas from '../slices/canvas'
import palette from '../slices/palette'

const store = configureStore({
  reducer: {
    canvas,
    palette
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>