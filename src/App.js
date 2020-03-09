import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import TodoList from './features/todo';

function App() {
  return (
    <div className = 'app-container'>
      <Switch>
        <Route exact path='/' component={TodoList}/>
      </Switch>
    </div>
  );
}

export default App;
