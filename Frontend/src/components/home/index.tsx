
import { Carousel } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import Events from "../Events";

import About from "../About";

import Contact from "../contact/contact";
import UpdateEvent from "../Events/UpdateEvent";
import ImageList from "./ImageList";
import EditImage from "./editImage";

const Home = () => {
  return (
    <>
    <EditImage />
     
      <About />

      <UpdateEvent />
      <div style={{ textAlign: "center" }}>
        <a href="/events" className="btn btn-warning">
          Click to view all events
        </a>
        <a
          href="/calendar"
          className="btn btn-warning"
          style={{ marginLeft: "20px" }}
        >
          Click to view Calender
        </a>
      </div>
      {/* <Team /> */}
      

      <Contact />
    </>
  );
};


export default Home;
