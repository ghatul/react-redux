import axios from 'axios';
import _ from 'lodash';


function request(method, url, data) {
  const headers = {};

    _.extend(headers, {
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'Content-Type': 'application/json',
    });

  const token = localStorage.getItem('token');
  if(token) {
    _.extend(headers, { authorization: 'bearer' + ' ' + token});
  }

  return axios({
    method,
    url,
    data,
    headers,
  });
}


export default class RequestService {
  static fetch(url, data) {
    return request('get', url, data);
  }

  static save(url, data) {
    return request('post', url, data);
  }

  static update(url, data) {
    return request('put', url, data);
  }

  static delete(url, data) {
    return request('delete', url, data);
  }

  static getPost(method,url, data) {
    return request(method, url, data);
  }
}
