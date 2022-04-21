import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Destinations from "./components/Destinations";
import Login from "./components/Login";
import About from "./components/About.jsx";
import Servicios from "./components/Servicios.jsx";
import Details from "./components/Details";
import Shopping from "./components/Shopping";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import EditarServicios from "./components/EditarServicios";
import WishList from "./components/WishList";


import UserReviews from "./components/UserReviews";
import AdminPanel from "./components/Admin/AdminPanel";
import User from "./components/Admin/Users";
import Orders from "./components/Admin/Orders";

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
          <Route exact path="/servicios/">
            <Servicios />
          </Route>
          <Route exact path="/editarservicios/:id">
            <EditarServicios />
          </Route>
          <Route exact path="/destination/:id">
            <Details />
          </Route>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route extact path="/wishlist">
            <WishList/>
          </Route>
          <Route exact path="/reviews/:id">
            <UserReviews />
          </Route>
          <Route exact path="/admin/profile">
            <AdminPanel />
          </Route>
          <Route exact path="/users">
            <User />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
