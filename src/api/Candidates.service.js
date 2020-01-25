import {
  BASE,
  GET,
  PATCH,
  DELETE,
  fullUrl,
  makeBody,
} from './HttpShared.constants';

const RESOURCE = '/candidates';
const URL = `${BASE}${RESOURCE}`;

const fetchCandidates = () => fetch(URL, GET).then(response => response.json());

const updateCandidate = (id, body) => fetch(fullUrl(URL, id), makeBody(PATCH, body))
  .then(response => response.json());

const deleteCandidate = id => fetch(fullUrl(URL, id), DELETE).then(response => response.json());

export { fetchCandidates, updateCandidate, deleteCandidate };
