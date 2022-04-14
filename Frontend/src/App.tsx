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
import LoginReset from "./components/LoginReset";
import NewPassword from "./components/LoginReset/NewPassword";
import Events from "./components/Events";

import IdleTimer from "./components/Timeout/idleTimer";
import { useState, useEffect } from "react";
import * as AuthService from "./services/authenticate-service";
import NewLogin from "./components/login/NewLogin";
import NewSignUp from "./components/signup/NewSignUp";
import Footer from "./components/footer 2/Footer";
import Team from "./components/Team/team";
import TshirtSale from "./components/TshirtSale/tshirtSale";
import Donation from "./components/Donation/Donation";
import Calendar from "./components/Calendar/calendar";
import CalendarDisplay from "./components/Calendar/calendar";
import AddScholarship from "./components/AddScholarship/Add";
import ViewScholarship from "./components/ViewScholarship/View";
import StudentFilledForm from "./components/StudentFilledForm/StudentFilledForm";

function App() {
  const [isTimeout, setIsTimeout] = useState(false);
  const onTimeExpired = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      AuthService.logout();
      window.location.href = "/login";
      alert("You have been logged out due to inactivity");
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/signup" element={<NewSignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendar" element={<CalendarDisplay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<MemberList />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />

          <Route path="/profile/*" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/update/:id" element={<UpdateMember />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/forgotpassword" element={<LoginReset />} />
          <Route path="/newpassword/:id" element={<NewPassword />} />
          <Route path="/AddScholarship" element={<AddScholarship />} />
          <Route path="/ViewScholarship" element={<ViewScholarship />} />
          <Route path="/StudentFilledForm" element={<StudentFilledForm />} />

          {/* <Route path="/profile/*" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/update/:id" element={<UpdateMember />} />
          <Route path="/membership" element={<Membership />} /> */}
          <Route path="/tshirtSale" element={<TshirtSale />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
