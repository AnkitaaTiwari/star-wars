import { put, takeLatest } from 'redux-saga/effects';
import { getPeopleList } from '../api';
import { FETCH_PEOPLE_LIST, FETCH_PEOPLE_LIST_SUCCESS, FETCH_PEOPLE_LIST_FAILURE } from '../constants';

function* loadPeopleList() {
  const peopleList = yield getPeopleList();
  yield put({ type: FETCH_PEOPLE_LIST_SUCCESS, peopleList: peopleList.data });
}

function* fetchPeopleListSaga() {
  yield takeLatest(FETCH_PEOPLE_LIST, loadPeopleList);
}

export default fetchPeopleListSaga;
