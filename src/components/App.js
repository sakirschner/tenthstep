import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Home from './Home';
import Entry from './Entry';
import history from '../history';

const App = () => {
  return (
    <div>
        <Router history={history}>
          <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/NewEntry" exact component={Entry} />
            </Switch>
          </div>
        </Router>      
    </div>
  );
};

export default App;
