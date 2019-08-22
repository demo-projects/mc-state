import {SET_USERS} from "../actions/users";

export function usersReducer(users = [], action) {
  if(action.type === SET_USERS) return action.payload;

  return users;
}