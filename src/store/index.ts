import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import canvas from '../slices/canvas'

const store = configureStore({
  reducer: {
    canvas
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>