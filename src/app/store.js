import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../testing/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})