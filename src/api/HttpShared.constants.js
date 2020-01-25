// TODO: Add a cross-env, ex: process.env.NODE_ENV !== 'production'
const URL = 'http://localhost:3000';

const HEADER = new Headers();
HEADER.set('Content-Type', 'application/json');

const HTTP = {
  headers: HEADER,
  mode: 'cors',
  cache: 'default',
};

const GET = {
  method: 'GET',
  ...HTTP,
};

const PUT = {
  method: 'GET',
  ...HTTP,
};

const DELETE = {
  method: 'DELETE',
  ...HTTP,
};

export {
  URL,
  GET,
  PUT,
  DELETE,
};
