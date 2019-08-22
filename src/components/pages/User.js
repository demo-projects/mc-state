import React, {useEffect} from 'react';
import {useUserById} from "../../hooks/queries/useUsers";
import {useAlbumsActions} from "../../hooks/commands/useAlbumsActions";

const User = ({match}) => {
  const user = useUserById(match.params.id);
  const {fetchAlbumBuUserId} = useAlbumsActions();

  useEffect(() => {
    if(user) fetchAlbumBuUserId(user.id)
  }, [user]);

  if(!user) return null;

  return (
      <div>
        <h2>{user.name}</h2>
        <pre>{JSON.stringify(user, null,1)}</pre>
      </div>
  );
};

export default User;