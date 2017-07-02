import api from '../api';

const initialState = {
  onlineUsers: [],
  pending: false,
  error: ''
};

export default (state = initialState, action) => {

  switch (action.type) {
    case api.getOnlineUsers.request:
      return { ...state, pending: true, error: '' };
    case api.getOnlineUsers.success:
      return { ...state, pending: false, onlineUsers: action.payload, error: '' };
    case api.getOnlineUsers.fail:
      return { ...state, pending: false, onlineUsers: action.payload, error: '' };

    case api.pushOnlineUser.request:
      return { ...state, pending: true, error: '' };
    case api.pushOnlineUser.success:
      return { ...state, pending: false, onlineUsers: action.payload, error: '' };
    case api.pushOnlineUser.fail:
      return { ...state, pending: false, onlineUsers: action.payload, error: '' };

    default:
      return state;
  };
}
