import Login from "./components/login";
import "./App.css";
import Signup from "./components/signup";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar";
import About from "./components/About";
import Contact from "./components/contact/contact";
import MemberList from "./components/MemberList";

import Payment from "./components/Payment/Payment";
import Success from "./components/Payment/Success";
import Error from "./components/Payment/Error";

import Profile from "./components/User/Profile";
import BoardUser from "./components/BoardMembers/BoardUser";
import UpdateMember from "./components/MemberList/UpdateMember";
import Membership from "./components/Membership";
import IdleTimer from "./components/Timeout/idleTimer";
import { useState, useEffect } from "react";
import * as AuthService from "./services/authenticate-service";
import NewLogin from "./components/login/NewLogin";
import NewSignUp from "./components/signup/NewSignUp";
import Footer from "./components/footer/Footer";


function App() {
  const [isTimeout, setIsTimeout] = useState(false);
  const onTimeExpired = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      AuthService.logout();
      window.location.href = "/login";
      alert('You have been logged out due to inactivity');
    }
  };
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 1000, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        // do something if expired on load
        setIsTimeout(true);
        // AuthService.logout();
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);
  return (
    <>
    
      {isTimeout && onTimeExpired()}
      <Router>
      
        <NavigationBar />
        <div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<NewLogin />} />
          <Route path="/signup" element={<NewSignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<MemberList />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />

          <Route path="/profile/*" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/update/:id" element={<UpdateMember />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
        
      </Router>
      <Footer/>
    </>
  );
}

export default App;
