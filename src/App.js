import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Users from './features/users';

function App() {
  return (
    <Switch>
        <Route exact path='/' component={Users}/>
      </Switch>
  );
}

export default App;
