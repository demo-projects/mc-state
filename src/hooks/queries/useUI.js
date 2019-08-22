import {useSelector} from "react-redux";

export function useLoading() {
  return useSelector( state => state.ui.loading)
}