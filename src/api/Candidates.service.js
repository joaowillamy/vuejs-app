import ConfigRequest from './HttpShared.constants';

const http = new ConfigRequest('/candidates');

const fetchCandidates = () => http.getAll({ _sort: 'name', _order: 'asc' });

const updateCandidate = (id, body) => http.patch(id, body);

const deleteCandidate = id => http.delete(id);

export { fetchCandidates, updateCandidate, deleteCandidate };
