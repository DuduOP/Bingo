export default {
  baseUrl: '/api/users',
  getOnlineUsers: {
    params: '',
    method: 'GET',
    body: null,
    headers: new Headers()
  },
  pushOnlineUser: {
    params: '',
    method: 'POST',
    body: {},
    headers: new Headers()
  },
  removeOnlineUser: {
    params: '',
    method: 'POST',
    body: null,
    headers: new Headers()
  }
};
