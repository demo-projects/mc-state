export const API_REQUEST = 'API_REQUEST';

export function apiRequest({method = "GET", url, payload = {}, onSuccess, onError}) {
  return {
    type: API_REQUEST,
    payload,
    meta: {method, url, onSuccess, onError}
  }
}
