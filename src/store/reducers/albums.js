import {SET_ALBUMS, UPDATE_ALBUMS} from "../actions/albums";

export function albumsReducer(albums = [], action) {

  if(action.type === SET_ALBUMS) return action.payload;
  if(action.type === UPDATE_ALBUMS) return [...albums, ...action.payload];

  return albums;
}