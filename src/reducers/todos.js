import objectAssign from 'object-assign';
import {todos} from '../constant';

const initialState = {
    todos: todos,
    selectedUserTodo: [],
    isLoading: false,
};
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_TODO_LIST':
        return objectAssign({}, state, {
          todos: action.data,
        });
      case 'SET_SELECTED_USER_TODO':
        return objectAssign({}, state, {
          selectedUserTodo: action.data,
        });
      case 'SET_LOADING':
        return objectAssign({}, state, {
          isLoading: action.data,
        });
      default:
        return state
    }
  }