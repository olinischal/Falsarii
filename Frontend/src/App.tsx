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
import BoardUser from './components/BoardMembers/BoardUser';
import UpdateMember from './components/MemberList/UpdateMember';
import Membership from './components/Membership';
import LoginReset from './components/LoginReset';
import NewPassword from './components/LoginReset/NewPassword';





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

        <Route path="/payment" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/error" element={<Error/>}/>

        <Route path="/profile/*" element={<Profile />}/>
        <Route path="/user" element={<BoardUser />} />
        <Route path="/update/:id" element={<UpdateMember/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/forgotpassword" element={<LoginReset/>}/>
        <Route path="/newpassword/:id" element={<NewPassword/>}/>

        
      </Routes>
   
      </Router>
  
  );
}

export default App;
