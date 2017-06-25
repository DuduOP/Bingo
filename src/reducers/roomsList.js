import api from '../api';

const initialState = {
  rooms: [],
  pending: false,
  error: ''
};

export default (state = initialState, action) => {

  switch (action.type) {
    case api.getRooms.request:
      return { ...state, pending: true, error: '' };
    case api.getRooms.success:
      return { ...state, pending: false, rooms: action.payload, error: '' };
    case api.getRooms.fail:
      return { ...state, pending: false, rooms: action.payload, error: '' };

    default:
      return state;
  };
}
