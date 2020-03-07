import objectAssign from 'object-assign';
import {users} from '../constant';

const initialState = {
    users: users,
};
export default function home(state = initialState, action) {
    switch (action.type) {
      case 'SET_USERS':
        return objectAssign({}, state, {
          users: action.data,
        });
      default:
        return state
    }
  }