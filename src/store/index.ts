import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import nodes from '../slices/nodes'

const store = configureStore({
  reducer: {
    nodes
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>