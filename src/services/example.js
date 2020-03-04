import request from '../utils/request';
const api = 'http://localhost:3000'
export function query() {
  return request('/api/users');
}

export function login(payload) {
  return request(`${api}/login`,{method:'post',credentials: 'include',body:JSON.stringify(payload)});
}

export function iflogin(payload) {
  return request(`${api}/iflogin`,{method:'post',credentials: 'include',body:JSON.stringify(payload)});
}

export function sign(payload) {
  return request(`${api}/sign`,{method:'post',credentials: 'include',body:JSON.stringify(payload)});
}
