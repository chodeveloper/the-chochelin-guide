import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>          
        </div>        
      </div>
    </Router>
  );
}

export default App;
