import { all } from 'redux-saga/effects';
import fetchCharacterSaga from './fetchCharacterSaga';
import fetchPeopleListSaga from './fetchPeopleListSaga';

export default function* rootSaga () {
  yield all ([ fetchCharacterSaga(), fetchPeopleListSaga() ]);
}