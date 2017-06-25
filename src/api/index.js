const api = {
  getRooms: {
    url: '/api/rooms',
    type: 'GET'
  }
}

export default ((api) => {

  const result = {};
  Reflect.ownKeys(api).forEach(_ => {
    result[_] = {
      ...api[_],
      name: _,
      fail: `${_}.fail`,
      success: `${_}.success`,
      request: `${_}.request`
    };
  });
  return result;
})(api);
