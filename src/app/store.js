import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import movieReducer from '../features/movies/slice';
import searchReducer from '../features/page/slice'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    search:searchReducer,
  },
  middleware: [sagaMiddleware]
});

export default function configureAppStore(){
  sagaMiddleware.run(rootSaga)
  return {store}
}

