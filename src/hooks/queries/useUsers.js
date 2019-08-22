import {useMemo} from 'react';
import {createSelector} from 'reselect';
import {useSelector} from "react-redux";

// export function allUsers(state) {
//   return state.users;
// }


export function useAllUsers() {
  return useSelector( state => state.users)
}

const userByIdSelector = () => createSelector(
    (state) => state.users,
    (users, userId) => userId,
    (users, userId) => users.filter(user => {
      return user.id == userId
    })[0]
);

export function useUserById(id) {
  const memoizedSelector = useMemo(userByIdSelector, [id]);
  return useSelector(state => memoizedSelector(state, id))
}
