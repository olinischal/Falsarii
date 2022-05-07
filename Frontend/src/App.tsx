import "./App.css";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
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

import Calendar from './components/Calendar/Calendar';

import SearchMember from './components/searchMember/searchMember';


import Scholarships from './components/Scholarships';
import ScholarshipPage from './components/Scholarships/ScholarshipPage';
import MembershipType from './components/Membership/index';
import EventPage from './components/Events/EventPage';



import Groups from "./components/Group";
import UnAuthorize from "./components/Authenticate/UnAuthorize";

import UpdateScholarships from "./components/Scholarships/UpdateScholarships";
import Layout from "./components/Routing/Layout";
import RequireAuth from "./components/Authenticate/RequireAuth";
import UpdateEvent from "./components/Events/UpdateEvent";

import CalendarEvents from "./components/Calendar";
import ImageUpload from "./components/User/Image/ImageUpload";
import SearchByType from "./components/searchMember/searchByType";


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTimeout, setIsTimeout] = useState(false);
  const ROLES = {
    User: "ROLE_USER",
    Admin: "ROLE_ADMIN",
  };

  

  return (


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
         
          <Route path="/searchByType" element={<SearchByType />} />

          
            <Route path="/members" element={<MemberList />} />
            <Route path="/update/:id" element={<UpdateMember />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/events" element={<Events />} />
            <Route path ="/searchMember"  element={<SearchMember userList/>}/>
            <Route path="/calendarDisplay" element={<CalendarEvents />} />
        

          
            <Route path="/membership" element={<Membership />} />
            
           
            <Route path="/forgotpassword" element={<LoginReset />} />
            <Route path="/newpassword/:id" element={<NewPassword />} />
          </Route>

          <Route path="/user" element={<BoardUser />} />
          <Route path="/groups" element={<Groups />} />
       
      </Routes>

      <Footer />
    
    </div> 

  );
}

export default App;