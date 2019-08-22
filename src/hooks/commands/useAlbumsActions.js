import {useDispatch} from "react-redux";
import {API_REQUEST, apiRequest} from "../../store/actions/api";
import {setAlbums, updateAlbums} from "../../store/actions/albums";

export function useAlbumsActions() {
  const dispatch = useDispatch();

  const fetchAllAlbums = () => {
    dispatch(apiRequest({
      method: 'GET',
      url: '/albums',
      onSuccess: fetchAlbumSuccess,
      onError: fetchAlbumError,
    }))
  };

  const fetchAlbumBuUserId = (userId) => {
    dispatch(apiRequest({
      type: API_REQUEST,
      method: 'GET',
      url: `/albums?userId=${userId}`,
      onSuccess: onFetchAlbumsSuccess
    }))
  };

  const onFetchAlbumsSuccess = (userAlbums) => {
    dispatch(updateAlbums({payload: userAlbums}))
  };

  const fetchAlbumSuccess = (albums) => {
    dispatch(setAlbums({payload: albums}))
  };

  const fetchAlbumError = (error) => {
    console.log(error);
  };

  return {fetchAllAlbums, fetchAlbumBuUserId};
}