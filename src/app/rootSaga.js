import {all,fork} from 'redux-saga/effects'
import  moviesSaga  from '../features/movies/saga';
import searchSaga from '../features/page/saga'

export default function* rootSaga() {
    // yield all([...moviesSaga])
    yield fork(moviesSaga);
    yield fork(searchSaga);
}
