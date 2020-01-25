import {
  URL,
  GET,
  PUT,
  DELETE,
} from './HttpShared.constants';

const RESOURCE = '/candidates';
const FULL_URL = `${URL}${RESOURCE}`;

const fetchCandidates = () => fetch(FULL_URL, GET).then(response => response.json());
const updateCandidate = () => fetch(FULL_URL, PUT).then(response => response.json());
const deleteCandidate = () => fetch(FULL_URL, DELETE).then(response => response.json());

export { fetchCandidates, updateCandidate, deleteCandidate };
