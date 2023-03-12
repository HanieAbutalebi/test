import { call, put, takeEvery,fork } from 'redux-saga/effects'
import { NEW_SEARCH_RESULT} from './actions';
import { fetchSearchResult } from './api';
import { setResults } from './slice';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* onLoadPage(action) {
  console.log(action);
  try {
    const response = yield call(fetchSearchResult, action.payload);
    // if (response.status === 200) {
      yield put(setResults(response));
    // }
    console.log(response ,action.payload,'ferereeeeeee');
  } catch (error) {
    yield put({type: NEW_SEARCH_RESULT, error}) 
  }
}
function* mySaga() {
  yield takeEvery(NEW_SEARCH_RESULT, onLoadPage);
}


export default mySaga;