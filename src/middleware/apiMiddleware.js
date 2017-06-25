export default store => next => action => {
  if (action.API) {
    const apiParams = action.API;
    store.dispatch({
      type: apiParams.request,
      params: action.params
    });
    fetch(apiParams.url, { type: apiParams.type, data: apiParams.params})
      .then(response => response.json())
      .then(result => store.dispatch({
        type: apiParams.success,
        params: action.params,
        payload: result,
      }))
      .catch(_ => store.dispatch({
        type: apiParams.fail,
        params: action.params,
        payload: _,
      }));

  }
  else {
    next(action);
  }
}
