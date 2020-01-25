import {
  URL,
  GET,
  PUT,
// DELETE
} from '../constants/shared.const';

const RESOURCE = '/candidates';

const fetchCandidates = () => {
  const url = `${URL}${RESOURCE}`;
  return fetch(url, GET).then(response => response.json());
};

const updateCandidates = () => {
  const url = `${URL}${RESOURCE}`;
  return fetch(url, PUT).then(response => response.json());
};

export { fetchCandidates, updateCandidates };
