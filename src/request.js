import axios from 'axios';

const service = axios.create();

export function getAction(url, parameter,options) {
  return service({
    url: url,
    method: 'get',
    params: parameter,
    ...options
  })
}