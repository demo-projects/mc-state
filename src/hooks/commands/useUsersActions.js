import {useDispatch, useSelector, useStore} from "react-redux";
import {API_REQUEST, apiRequest} from "../../store/actions/api";
import {setUsers} from "../../store/actions/users";
import {toggleLoader} from "../../store/actions/ui";

export function useUsersActions() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const fetchAllUsers = () => {

    if(users.length > 0) return;

    dispatch(toggleLoader({
      loaderVisible: true,
      trigger: 'fetch users'
    }));

    dispatch(apiRequest({
      method: 'GET',
      url: '/users',
      onSuccess: fetchUsersSuccess
    }))
  };

  const fetchUsersSuccess = (users) => {
    dispatch(setUsers({payload: users}))
  };

  return {fetchAllUsers}
}