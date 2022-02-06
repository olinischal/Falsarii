

import { useEffect, useState } from "react"
import AuthService from "./services/auth.service";

import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap';


import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import formikSignup from "./components/Forms/formikSignup.js";
import formikForm from "./components/formikForm";
import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);



  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
  };

  const setUserStates = (user) => {
    setCurrentUser(user);
    setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  }
  useEffect(() => {

    // function logOut() {
    //   AuthService.logout();
    //   setCurrentUser(undefined);
    //   setShowModeratorBoard(false);
    //   setShowAdminBoard(false);
    // }

    const user = AuthService.getCurrentUser();

    if (user) {
      // setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setTimeout(() => {
        setUserStates(user);
      }, 0);
    }

    EventBus.on("logout", () => {
      setTimeout(() => {
        logOut();
      }, 0);
    });

    return () => {
      EventBus.remove("logout");
    }
  });

  return (
    <>
    
    
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            NAFA
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/formikForm"} className="nav-link">
                  FormikForm
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/formikForm" component={formikForm}/>
          </Switch>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div></>
  )


}

export default App;