import {combineReducers} from "redux";
import {usersReducer} from './users';
import {albumsReducer} from "./albums";
import {uiReducer} from "./ui";

export const rootReducer = combineReducers({
  ui: uiReducer,
  users: usersReducer,
  albums: albumsReducer,
});
