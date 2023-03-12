import { createAction } from "@reduxjs/toolkit";

export const NEW_SEARCH_RESULT = 'search/sendSearch';
export const sendUserInputWithSaga = createAction(NEW_SEARCH_RESULT);

