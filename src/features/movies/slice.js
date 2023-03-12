import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  moviesList: [],
  movie: {},
};

export const slice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
      console.log(action.payload);
    },
    setSingleMovie: (state, action) => {
      state.movie = action.payload;
      console.log(action.payload);
    },
  }, 
});

export const { getMovies,setMovies,setSingleMovie } = slice.actions;
export const selectMovie = (state) => (state.moviesList ) ;
export const selectSingleMovie = (state) => (state.movie ) ;

export default slice.reducer;
