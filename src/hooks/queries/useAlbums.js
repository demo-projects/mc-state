import {useSelector} from "react-redux";

export function useAllAlbums() {
  return useSelector( state => state.albums)
}