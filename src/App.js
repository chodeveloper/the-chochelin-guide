import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import RestaurantListPage from './pages/RestaurantList';
import RestaurantPage from './pages/Restaurant';
import NotFoundPage from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/restaurant-list" component={RestaurantListPage} />
            <Route path="/restaurant/:id" component={RestaurantPage} />
            <Route component={NotFoundPage} />
          </Switch>          
        </div>        
      </div>
    </Router>
  );
}

export default App;
