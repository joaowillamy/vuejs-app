import {
  BASE,
  GET,
  PUT,
  DELETE,
  fullUrl,
} from './HttpShared.constants';

const RESOURCE = '/candidates';
const URL = `${BASE}${RESOURCE}`;

const fetchCandidates = () => fetch(URL, GET).then(response => response.json());
const updateCandidate = () => fetch(URL, PUT).then(response => response.json());
const deleteCandidate = id => fetch(fullUrl(URL, id), DELETE).then(response => response.json());

export { fetchCandidates, updateCandidate, deleteCandidate };
