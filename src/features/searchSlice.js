import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  searchInput: "",
  pending: "",
  error: "",
  results: []
};

export const searchSlice = createSlice({
  name: "musicSearch",
  initialState,
  reducers: {
    userSearchInput: (state, action)=>{
      state.searchInput = action.payload
    }
  },
  extraReducers: (builder) => builder.addCase(searchText.pending, (state, action) =>{
    state.pending = "Loading"
  })
  .addCase(searchText.fulfilled, (state, action) =>{
    state.results = action.payload
  })
  .addCase(searchText.rejected, (state, action) => {
    state.error = "The is a problem fetching the data"
  }) 
});


export const searchText = createAsyncThunk("musicSearch/searchText", async (string) =>{
  // console.log(string, "string")
    try {

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDAzZmIyYmM5ZDE3NjhiMDZmMDAzYzUyNWM0NmMyYyIsInN1YiI6IjY0YjgyNDdjNTViMGMwMDBmZmIwZGZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n0Cuf1zswhdiK3E4m5ZEdbDUimZcX8AWZWBnJC3e6WI"
        }
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${string}&include_adult=false&language=en-US&page=1`,
        options
      );
      const res = await response.json();
      const data = res.results
      // console.log(data)
      
      return data
    } catch (err) {
      // console.error("Error fetching movies:", err);
      return err;
    }
})

export const { userSearchInput } = searchSlice.actions

export default searchSlice.reducer

{/* <input onchange={(e)=>dispatch(input(e.target.value))/> */}