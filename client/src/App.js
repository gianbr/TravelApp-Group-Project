import React from 'react';

import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Destinations from './components/Destinations';
import Login from './components/Login';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/destination">
            <Destinations />
          </Route>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
      </Switch>
    </Router>
    </div>
  );
};
export default App;