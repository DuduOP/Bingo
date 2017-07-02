import api from '../api';

export function getOnlineUsers() {
  return dispatch => { dispatch({API: api.getOnlineUsers}) };
}

export function pushOnlineUser(user) {
  api.pushOnlineUser.user = user;
  return dispatch => { dispatch({API: api.pushOnlineUser}) };
}
