import { combineReducers } from 'redux';
import usersReducer from './users';
import navBar from './navBar';
import todoReducer from './todos';

export default combineReducers({
    usersReducer,
    navBar,
    todoReducer,
})