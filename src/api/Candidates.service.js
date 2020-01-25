import ConfigRequest from './HttpShared.constants';

const http = new ConfigRequest('/candidates');

const fetchCandidates = () => http.getAll();

const updateCandidate = (id, body) => http.patch(id, body);

const deleteCandidate = id => http.delete(id);

export { fetchCandidates, updateCandidate, deleteCandidate };
