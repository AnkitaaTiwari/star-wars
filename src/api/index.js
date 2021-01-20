import axios from 'axios';

const PEOPLE_LIST_API = 'https://swapi.dev/api/people';

export function getPeopleList () {
  return axios.get(encodeURI(PEOPLE_LIST_API));
}

export function getData (url) {
  return axios.get(encodeURI(url));
}

