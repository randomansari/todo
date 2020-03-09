import objectAssign from 'object-assign';
import {users} from '../constant';

const initialState = {
    users: users,
    selectedUser: '1'
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_SELECTED_USER':
        return objectAssign({}, state, {
          selectedUser: action.data,
        });
      default:
        return state
    }
  }