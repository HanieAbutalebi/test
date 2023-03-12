import { call, put, takeLatest,fork } from 'redux-saga/effects'
import { SEARCH_RESULT,GET_MOVIE} from './actions';
import { fetchResult,fetchMovie } from './api';
import { setMovies,setSingleMovie } from './slice';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* onLoadMovies(action) {
  console.log({ action });
  // try {
    const movieName = action.payload;
    console.log(action.payload,'hihi')
    const response = yield call(fetchResult, movieName);
    console.log(response);
    if (response.status === 200 ) {
      console.log(response, 'fffff');
      yield put(setMovies({ ...response.data }));
    // }
    
  // } catch (error) {
  //   yield put({type: SEARCH_RESULT, error}) 
  }
}

function* onLoadSingleMovie( action) {
  console.log(action);
  // try {
    const movieId = action.payload;
    console.log(action.payload,'hihi')
    const response = yield call(fetchMovie, movieId);
    console.log(response);
    if (response.status === 200 ) {
      console.log(response, 'fffff');
      yield put(setSingleMovie({ ...response.data }));
    // }
    
  // } catch (error) {
  //   yield put({type: SEARCH_RESULT, error}) 
  }
}
function* mySaga() {
  yield takeLatest(SEARCH_RESULT, onLoadMovies);
  yield takeLatest(GET_MOVIE, onLoadSingleMovie);
}


export default mySaga;

// export const moviesSaga = [fork(mySaga)];