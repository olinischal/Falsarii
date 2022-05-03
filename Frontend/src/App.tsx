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


import Payment from "./components/Scholarships/Payment/Payment";
import Success from "./components/Payment/Success";
import Error from "./components/Scholarships/Payment/Error";


import Profile from "./components/User/Profile";
import BoardUser from "./components/Authenticate/BoardUser";
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
import Footer from "./components/footer/Footer";
import Team from './components/Team/team';
import TshirtSale from './components/TshirtSale/tshirtSale';
import Donation from './components/Donation/Donation';
import Calendar from './components/Calendar/Calendar';

import SearchMember from './components/searchMember/searchMember';


import Scholarships from './components/Scholarships';
import ScholarshipPage from './components/Scholarships/ScholarshipPage';
import MembershipType from './components/Membership/membershipType';
import EventPage from './components/Events/EventPage';



import Groups from "./components/Group";
import UnAuthorize from "./components/Authenticate/UnAuthorize";

import UpdateScholarships from "./components/Scholarships/UpdateScholarships";
import Layout from "./components/Routing/Layout";
import RequireAuth from "./components/Authenticate/RequireAuth";
import UpdateEvent from "./components/Events/UpdateEvent";

import CalendarEvents from "./components/Calendar";
import ImageUpload from "./components/User/Image/ImageUpload";


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTimeout, setIsTimeout] = useState(false);
  const ROLES = {
    User: "ROLE_USER",
    Admin: "ROLE_ADMIN",
  };
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
      timeout: 1000, 
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        setIsTimeout(true);
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);
  return (

    <>
       <div style={{
      backgroundColor:'#FFFFF4'
    }}>
      
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/signup" element={<NewSignUp />} />
          <Route path="/about" element={<About />} />

          <Route path="/eventList" element={<UpdateEvent />} />
          
          <Route path="/contact" element={<Contact />} />

        

          <Route path="/s/page/:id" element={<ScholarshipPage />} />
          <Route path="/e/page/:id" element={<EventPage/>}/>
          

        

          
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/donation-success" element={<Success />} />
          <Route path="/donation-unsucessfull" element={<Error />} />
          <Route path="/scholarshipList" element={<UpdateScholarships />} />
          <Route path="/unauthorized" element={<UnAuthorize />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/s/payment" element={<Payment amount email donateStatus/>} />
          <Route path="/imageUpload" element={<ImageUpload />} />
          
          <Route path="/membershipType" element={<MembershipType />} />
          <Route path ="/searchMember"  element={<SearchMember />}/>
          <Route path="/tshirtSale" element={<TshirtSale />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/members" element={<MemberList />} />
            <Route path="/update/:id" element={<UpdateMember />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendarDisplay" element={<CalendarEvents />} />
          </Route>

          <Route
            element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
          >
            <Route path="/membership" element={<Membership />} />
            
           
            <Route path="/forgotpassword" element={<LoginReset />} />
            <Route path="/newpassword/:id" element={<NewPassword />} />
          </Route>

          <Route path="/user" element={<BoardUser />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
      </Routes>

      <Footer />
      </div>
    </>

  );
}

export default App;