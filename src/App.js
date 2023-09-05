import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserForm} />
        <Route path="/user-info" component={UserInfo} />
      </Switch>
    </Router>
  );
}

export default App;

