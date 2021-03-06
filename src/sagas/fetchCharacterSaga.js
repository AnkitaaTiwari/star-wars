import { put, all, call, takeLatest } from 'redux-saga/effects';
import { getData } from '../api';
import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from '../constants';

function* loadCharacter({ url }) {
  try {
    const character = yield getData(url);
    const movieList = yield all( character.data.films.map( filmUrl => call( getData, filmUrl ) ) )

    yield put({ type: FETCH_CHARACTER_SUCCESS, character: character.data, movieList });
  }
  catch(error) {
    yield put({ type: FETCH_CHARACTER_FAILURE, msg: JSON.stringify(error) })
  }
}

function* fetchCharacterSaga() {
  yield takeLatest(FETCH_CHARACTER, loadCharacter);
}

export default fetchCharacterSaga;
