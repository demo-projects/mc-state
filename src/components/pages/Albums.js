import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useAlbumsActions} from "../../hooks/commands/useAlbumsActions";
import {useAllAlbums} from "../../hooks/queries/useAlbums";

const Albums = () => {
  const {fetchAllAlbums} = useAlbumsActions();
  const albums = useAllAlbums();

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
      <div>
        <h2>Albums</h2>
        <ul>
          {albums.map(album => (
              <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </div>
  );
};

export default Albums;