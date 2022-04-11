import Login from './components/login'
import './App.css';
import Signup from './components/signup';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/navbar';
import About from './components/About';
import Contact from './components/contact/contact';
import MemberList from './components/MemberList';

import Payment from './components/Payment/Payment';
import Success from './components/Payment/Success';
import Error from './components/Payment/Error';

import Profile from "./components/User/Profile";
import BoardUser from './components/Authenticate/BoardUser';
import UpdateMember from './components/MemberList/UpdateMember';
import Membership from './components/Membership';
import LoginReset from './components/LoginReset';
import NewPassword from './components/LoginReset/NewPassword';
import Events from './components/Events';
import CalendarDisplay from './components/Calendar/calendar';


import IdleTimer from "./components/Timeout/idleTimer";
import { useState, useEffect } from "react";
import * as AuthService from "./services/authenticate-service";
import NewLogin from "./components/login/NewLogin";
import NewSignUp from "./components/signup/NewSignUp";
import Footer from "./components/footer/Footer";

import Scholarships from './components/Scholarships';
import ScholarshipPage from './components/Scholarships/ScholarshipPage';
import Groups from './components/Group';
import UnAuthorize from './components/Authenticate/UnAuthorize';

import UpdateScholarships from './components/Scholarships/UpdateScholarships';
import Layout from './components/Routing/Layout';
import RequireAuth from './components/Authenticate/RequireAuth';
import UpdateEvent from './components/Events/UpdateEvent';


function App() {
  const [isTimeout, setIsTimeout] = useState(false);
  const ROLES = {
    'User' : 'ROLE_USER',
    'Admin' : 'ROLE_ADMIN'
  }
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
      {/* <Router> */}
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Layout />}>

        {/* Routes for public */}
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<NewLogin/>}/>
        <Route path="/signup" element={<NewSignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        {/* <Route path="/events" element={<UpdateEvent events={undefined}/>}/> */}
        <Route path="/calendar" element={<CalendarDisplay/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/forgotpassword" element={<LoginReset/>}/>
        <Route path="/newpassword/:id" element={<NewPassword/>}/>
       
        <Route path="/s/page/:id" element={<ScholarshipPage />} />
        <Route path="/payment" element={<Payment/>}/>



        {/* Routes for all User level */}
        <Route path="/profile/*" element={<Profile />}/>          
        <Route path="/update/:id" element={<UpdateMember/>}/>

        <Route path="/membership" element={<Membership/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/scholarshipList" element={<UpdateScholarships />} />
        <Route path="/unauthorized" element={<UnAuthorize />} />      

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          {/* Routes for Admin only */}
        <Route path="/members" element={<MemberList/>}/>   
        
          
        </Route>
        <Route path="/scholarships" element={<Scholarships />} />
        {/* Needs updating */}
        <Route path="/user" element={<BoardUser />} />        
        {/* Modify later */}
        <Route path="/groups" element={<Groups />} />
        
          
          
          </Route>
        </Routes>
        
      {/* </Router> */}
      <Footer/>
    </>
  );
}

export default App;
