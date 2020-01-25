import { isEmptyObj } from '../help';

export default class ConfigRequest {
  // TODO: Add a cross-env, ex: process.env.NODE_ENV !== 'production'

  baseUrl = 'http://localhost:3000';

  resource;

  header;

  http;

  url;

  constructor(resource = '/') {
    this.resource = resource;
    this.url = `${this.baseUrl}${this.resource}`;
    this.configHeader();
    this.configHttp();
  }

  httpFetch(url = this.url, httpType = this.http) {
    return fetch(url, httpType).then(response => response.json());
  }

  getAll(params) {
    const get = { method: 'GET', ...this.http };
    return this.httpFetch(this.fullUrl({ params }), get);
  }

  patch(id, body) {
    const patch = { method: 'PATCH', ...this.http, body: JSON.stringify(body) };
    return this.httpFetch(this.fullUrl({ id }), patch, patch);
  }

  delete(id) {
    const del = { method: 'DELETE', ...this.http };
    return this.httpFetch(this.fullUrl({ id }), del);
  }

  configHeader() {
    this.header = new Headers();
    this.header.set('Content-Type', 'application/json');
  }

  configHttp() {
    this.http = { headers: this.header, mode: 'cors', cache: 'default' };
  }

  fullUrl({ id = '', params = '' }) {
    return `${this.url}${id && `/${id}`}${this.jsonToQueryString(params)}`;
  }

  jsonToQueryString = (json = false) => {
    if (isEmptyObj(json)) return '';

    const queryString = Object.keys(json)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`)
      .join('&');

    return `?${queryString}`;
  }
}
