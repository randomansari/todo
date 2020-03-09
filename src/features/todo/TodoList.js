import React, { useState, useEffect } from 'react';
import User from '../users';
import Nav from '../nav';
import './style.scss';

function TodoList({
    todos, 
    selectedUser, 
    getUserTodoList, 
    selectedUserTodo,
    isLoading,
    removeTodo
}) {
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);
    useEffect(() => getUserTodoList(selectedUser, todos),
    [selectedUser]);
    return (
        <div className='todo-container'>
            <User></User>
            <Nav></Nav>
            <div class = 'todo-list-container'>{
                isLoading ? <p style={{textAlign: 'center'}}>Loading...</p> : <div>
                {   
                    selectedUserTodo.length ?
                    <div>{
                        selectedUserTodo.map((todo, index)=>{
                            return (
                                <div key = {index} className = 'todo'  onClick = {() => setSelectedTodoIndex(index)}>
                                    <div 
                                        contenteditable = {index === selectedTodoIndex ? 'true': 'false'} 
                                        className='todo-text'
                                        >{todo.value}
                                    </div>
                                    <div className = 'todo-action'>
                                        {index === selectedTodoIndex ? <div className = 'update-btn'>update</div> : null}
                                        <div className = 'cross-btn' onClick = {() => removeTodo(todo.id, todos, selectedUser)}>X</div>
                                    </div>
                                </div>
                            )
                        })
                    }</div> : <p style={{textAlign: 'center'}}>There is no saved todo...</p>
                }
            </div>
            }</div>
        </div>
    )
    
}

export default TodoList;