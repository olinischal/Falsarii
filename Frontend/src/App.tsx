import Login from "./components/Headerbar/login";
import "./App.css";
import Signup from "./components/Headerbar/signup";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar";
import Headerbar from "./components/Headerbar";
import About from "./components/About";
import Contact from "./components/contact/contact";
import MemberList from "./components/MemberList";
import Payment from "./components/Payment/Payment";
import Success from "./components/Payment/Success";
import Error from "./components/Payment/Error";
import Profile from "./components/User/Profile";
import BoardUser from "./components/BoardMembers/BoardUser";
import Footer from "./components/Footer/footer";
import Events from "./components/event";
import Calendar from "./components/Calendar";
import Allevents from "./components/AllEvents";
import Give from "./components/Give";
import ViewScholarship from "./components/Scholarship/ViewScholarship";
import AddScholarship from "./components/Scholarship/AddScholarship";

function App() {
  return (
    <Router>
      <Headerbar />

      <NavigationBar />
      <div className="container"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/allevents" element={<Allevents />} />
        <Route path="/give" element={<Give />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/addScholarship" element={<AddScholarship />} />
        <Route path="/viewScholarship" element={<ViewScholarship />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
