import moment from 'moment';
import { put, all, call, takeLatest } from 'redux-saga/effects';
import { getData } from '../api';
import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from '../constants';

function* loadCharacter({ url }) {
  const character = yield getData(url);
  // console.log('character', character);
  // if (character?.data?.films?) {
  //   character?.data?.films
  // }
  // const lastMovie = character?.data?.films ? yield getData(character.data.films[character.data.films.length - 1]) : {};
  const movieList = yield all( character.data.films.map( filmUrl => call( getData, filmUrl ) ) )
  // console.log(moviesDetails?.data, 'movieDetails', moviesDetails);
  // let lastMovie = {};
  
  // yield moviesDetails?.forEach(movie => {
  //   console.log('111111');
  //   if(Object.keys(lastMovie).length === 0 && lastMovie.constructor === Object) {
  //     lastMovie = movie.data;
  //   } else {
  //     var lastReleaseDate = moment(lastMovie?.data?.release_date);//now
  //     var currentReleaseDate = moment(movie?.data?.release_date);
  //     // moment
  //     console.log(movie, 'lastMovie', lastMovie);
  //     console.log('condition', lastReleaseDate.diff(currentReleaseDate, 'days'));
  //     // console.log('condition', )
  //   }

  // })



  yield put({ type: FETCH_CHARACTER_SUCCESS, character: character.data, movieList });
}

function* fetchCharacterSaga() {
  yield takeLatest(FETCH_CHARACTER, loadCharacter);
}

export default fetchCharacterSaga;
