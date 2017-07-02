export default store => next => action => {
  if (action.API) {
    const apiParams = action.API;

    const requestParams = {
      method: apiParams.method,
      body: JSON.stringify(apiParams.payload),
      headers: new Headers()
    };

    requestParams.headers.append('Content-Type', 'application/json');

    store.dispatch({
      type: apiParams.request,
      params: action.params
    });

    fetch(apiParams.url, requestParams)
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
