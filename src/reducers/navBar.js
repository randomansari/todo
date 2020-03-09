import objectAssign from 'object-assign';
import {navBarItems} from '../constant';

const initialState = {
    navBarItems: navBarItems,
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