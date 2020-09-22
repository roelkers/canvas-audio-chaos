import { configureStore } from '@reduxjs/toolkit'
import canvas from '../slices/canvas'
import palette from '../slices/palette'
import action from '../slices/action-buttons'
import groups from '../slices/groups'

const store = configureStore({
  reducer: {
    canvas,
    palette,
    action,
    groups
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>