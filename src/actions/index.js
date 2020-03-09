const setSelectedUser = (data) => {
    return {
      type: 'SET_SELECTED_USER',
      data
    }
};

const setTodosList = (data) => {
  return {
    type: 'SET_TODO_LIST',
    data
  }
}

const getUserTodoList = (userId, todos) => {
  let result = todos.filter((todo) => {
    return todo.userId === userId
  })
  return async (dispatch) => {
    dispatch({
      type: 'SET_LOADING',
      data: true,
    });
    try {
      let promise = new Promise((resolve, reject)=>{
        setTimeout(resolve, 500);
      });
      const x = await promise;
      dispatch({
        type: 'SET_SELECTED_USER_TODO',
        data: result,
      });
      dispatch({
        type: 'SET_LOADING',
        data: false,
      });
    } catch (error) {}
  };
}

const removeTodo = (todoId, todos, userId) => {
  let filteredTodos = todos.filter(({id}) => id !== todoId);
  let filteredByUserTodo = filteredTodos.filter(({userId: id}) => {
    return id === userId
  })
  return (dispatch) => {
    dispatch({
      type: 'SET_TODO_LIST',
      data: filteredTodos,
    });
    dispatch({
      type: 'SET_SELECTED_USER_TODO',
      data: filteredByUserTodo,
    });
  }
}

export {
  setSelectedUser,
  getUserTodoList,
  removeTodo,
};