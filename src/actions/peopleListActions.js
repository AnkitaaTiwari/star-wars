import * as types from '../constants';

export const fetchPeopleListAction = (() =>({type: types.FETCH_PEOPLE_LIST}));
export const fetchPeopleListSuccessAction = ((data) =>({type: types.FETCH_PEOPLE_LIST_SUCCESS, data}));
export const fetchPeopleListFailureAction = ((msg) =>({type: types.FETCH_PEOPLE_LIST_FAILURE, msg}));
