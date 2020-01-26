const isEmptyObj = obj => (
  !obj || typeof obj !== 'object' || (Object.entries(obj).length === 0 && obj.constructor === Object)
);

const jsonToQueryString = (json = false) => {
  if (isEmptyObj(json)) return '';

  const queryString = Object.keys(json)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`)
    .join('&');

  return `?${queryString}`;
};

export { isEmptyObj, jsonToQueryString };
