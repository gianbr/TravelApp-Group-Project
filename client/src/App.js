import React from "react";

import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Destinations from "./components/Destinations";
import Login from "./components/Login";
import About from "./components/About.jsx";
import Servicios from "./components/Servicios.jsx";
import Details from "./components/Details";
import Shopping from "./components/Shopping";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/destination">
            {" "}
            <Destinations />{" "}
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
          <Route exact path="/servicios">
            <Servicios />
          </Route>
          <Route exact path="/destination/:id">
            {" "}
            <Details />
          </Route>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
