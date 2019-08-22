export const SET_USERS = 'SET_USERS';

export function setUsers({ payload = {}}) {
  return {
    type: SET_USERS,
    payload
  }
}