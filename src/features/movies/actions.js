import { createAction } from "@reduxjs/toolkit";

export const SEARCH_RESULT = 'searchResult/sendSearchResult';
export const searchResultWithSaga = createAction(SEARCH_RESULT);

export const GET_MOVIE = 'getMovie/recieveGetMovie';
export const getMovieWithSaga = createAction(GET_MOVIE);
