import React from 'react';
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
import Profile from "./components/User/Profile";
import BoardUser from './components/BoardMembers/BoardUser';




function App() {
  return (     
   
    
    <Router>
    
      
      <NavigationBar />
    
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/members" element={<MemberList/>}/>
        <Route path="/profile/*" element={<Profile />}/>
        <Route path="/user" element={<BoardUser />} />
        
      </Routes>
   
      </Router>
  
  );
}

export default App;
