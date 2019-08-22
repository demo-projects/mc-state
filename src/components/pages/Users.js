import React, {useEffect} from 'react';
import {useUsersActions} from "../../hooks/commands/useUsersActions";
import {useAllUsers} from "../../hooks/queries/useUsers";
import {Link} from 'react-router-dom';

const Users = () => {
  const {fetchAllUsers} = useUsersActions();
  const users = useAllUsers();

  useEffect(() => {
    fetchAllUsers()
  }, []);

  return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
              <Link to={`users/${user.id}`}>
                <li key={user.id}>{user.name}</li>
              </Link>
          ))}
        </ul>
      </div>
  );
};

export default Users;