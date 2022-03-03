import React from "react";
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
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<MemberList />} />
      </Routes>
      <div className="page-container" style={{ background: "100%" }}>
        <div className="content-wrap" style={{ maxWidth: "100%" }}></div>
      </div>
    </Router>
  );
}

export default App;
