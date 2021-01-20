import axios from 'axios';

export function getPeopleList (param) {
  console.log('A{PI');
  return axios.get(encodeURI('https://swapi.dev/api/people'));
}
