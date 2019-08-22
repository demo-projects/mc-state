import {TOGGLE_LOADER} from "../actions/ui";

const uiInitialState = {
  loading: false
};

export function uiReducer(ui = uiInitialState, action) {

  if(action.type === TOGGLE_LOADER) {
    return {...ui, loading: action.payload}
  }

  return ui;
}