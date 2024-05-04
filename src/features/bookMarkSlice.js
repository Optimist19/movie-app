import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	bookMarkArr: []
  }

export const bookMarkSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addMovie:(state, action)=>{
			console.log(action)

			// const id = action.payload.map()
			// const selectedMovie = state.bookMarkArr.find(bookmark => bookmark.id === action.payload.id)

			// const addingNewMovie = action.payload.result.find(bookmark => bookmark.id === action.payload.id)

			// if(selectedMovie){
			// 	console.log("no store")
			// 	return;
			// }else{
			// 	state.bookMarkArr.push(addingNewMovie)
			// }
		}
	}
})

export const { addMovie } = bookMarkSlice.actions

export default bookMarkSlice.reducer


