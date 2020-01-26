import { jsonToQueryString } from '../utils/help.util';

export default class ConfigRequest {
  baseUrl;

  resource;

  header;

  http;

  url;

  constructor(resource = '/') {
    this.baseUrl = process.env.VUE_APP_BASE_URL_SRV;
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
    const newId = id || id === 0 ? `/${id}` : '';
    return `${this.url}${newId}${jsonToQueryString(params)}`;
  }
}
