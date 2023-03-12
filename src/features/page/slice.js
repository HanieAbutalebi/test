import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


const initialState= {
  searchResults: [],
};

export const slice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.searchResults = state.searchResults.concat(action.payload);
      console.log(action.payload);
    },
  }, 
});

export const { setResults } = slice.actions;
export const selectSearchResults = (state) => state.search.searchResults;

export default slice.reducer;
