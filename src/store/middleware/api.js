import {API_REQUEST} from "../actions/api";
import {toggleLoader} from "../actions/ui";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const api = ({dispatch}) => (next) => (action) => {
  next(action);

  if(action.type === API_REQUEST) {
    const {method, url, payload, onSuccess, onError} = action.meta;

    dispatch(toggleLoader({loaderVisible: true, trigger: url}));

    fetch(API_URL + url, {method})
        .then(results => results.json())
        .then(response => {
          dispatch(toggleLoader({loaderVisible: false}));
          onSuccess(response)
        })
        .catch(error => onError(error))
  }
};
