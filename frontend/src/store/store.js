import { configureStore } from '@reduxjs/toolkit'
import ArticeSlice from './ArticeSlice'

export const store = configureStore({
  reducer: {Article:ArticeSlice},
})