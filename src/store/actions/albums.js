export const SET_ALBUMS = 'SET_ALBUMS';
export const UPDATE_ALBUMS = 'UPDATE_ALBUMS';

export function setAlbums({ payload = {} }) {
  return {
    type: SET_ALBUMS,
    payload,
    meta: {
      action: 'Replace the album collection'
    }
  }
}

export function updateAlbums({ payload = {} }) {
  return {
    type: UPDATE_ALBUMS,
    payload,
    meta: {
      action: 'Update an existing albums collection'
    }
  }
}
