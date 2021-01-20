import * as types from '../constants';

export const fetchCharacterAction = ((url) =>({type: types.FETCH_CHARACTER, url}));
export const fetchCharacterSuccessAction = ((data) =>({type: types.FETCH_CHARACTER_SUCCESS, data}));
export const fetchCharacterFailureAction = ((msg) =>({type: types.FETCH_CHARACTER_FAILURE, msg}));
