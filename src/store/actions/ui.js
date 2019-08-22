export const TOGGLE_LOADER = "TOGGLE_LOADER";

export function toggleLoader({loaderVisible = false, trigger}) {
  return {
    type: TOGGLE_LOADER,
    payload: loaderVisible,
    meta: {trigger}
  }
}


