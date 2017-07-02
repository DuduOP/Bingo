const api = {
  getRooms: {
    url: '/api/rooms',
    method: 'GET'
  },
  getOnlineUsers: {
    url: '/api/online',
    method: 'GET'
  },
  pushOnlineUser: {
    url: '/api/online',
    method: 'POST',
    user: {}
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
