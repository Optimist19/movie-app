import { configureStore } from '@reduxjs/toolkit'
import searchReducer  from './features/searchSlice'
import bookMarkReducer from './features/bookMarkSlice'


export const store = configureStore({
  reducer: {
	search: searchReducer,
  bookmark: bookMarkReducer
  },
})