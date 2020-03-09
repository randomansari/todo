import TodoList from './TodoList';
import { connect } from 'react-redux';
import {getUserTodoList, removeTodo} from '../../actions'

const mapStateToProps = ({todoReducer, usersReducer}) => ({
  todos: todoReducer.todos,
  selectedUser: usersReducer.selectedUser,
  selectedUserTodo: todoReducer.selectedUserTodo,
  isLoading: todoReducer.isLoading,
});
const mapDispatchToProps = dispatch => ({
  getUserTodoList: (userName, todos) => {
      dispatch(getUserTodoList(userName, todos));
  },
  removeTodo: (todoId, todos, userId) => {
      dispatch(removeTodo(todoId, todos, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);