import { Carousel } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import Events from "../Events";

import About from "../About";

import Contact from "../contact/contact";
import UpdateEvent from "../Events/UpdateEvent";

const Home = () => {
  return (
    <>
      <Carousel className="inner" id="home">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://neville.mcschools.net/sites/neville/cache/file/063634A1-78AA-4903-AAA9AA82850127C8.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Join Our Community</h5>
            <p>
              Join the Alumni Association of Naville High School and be a part
              of our community.
            </p>
            <p>
              <a href="./signup" className="btn btn-warning mt-3">
                Be a member
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/IMG_7189.JPG?itok=rYXn3Mg8"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h5>Donate For Scholarships</h5>
            <p>Help the students through various scholarships programs.</p>
            <p>
              <a href="#" className="btn btn-warning mt-3">
                Donate
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/reunion.jpeg?itok=AxEvaynM"
            alt="Third slide"
          />
          {/* className="d-none d-md-block" */}
          <Carousel.Caption>
            <h5>Learn more about us</h5>
            <p>Know about our events, scholarships, and other information.</p>
            <p>
              <a href="./#about" className="btn btn-warning mt-3">
                Learn More
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
      <div style={{ textAlign: "center" }}>
        <a href="/team" className="btn btn-warning">
          Click to view all team members.
        </a>
      </div>

      <Contact />
    </>
  );
};

export default Home;
