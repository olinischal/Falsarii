import { useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";
import "bootstrap/dist/css/bootstrap.css";

import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Payment from "../Payment/Payment";
import EventData from "../../types/Event";

const EventPage = () => {
  const navigate = useNavigate();

  /*once the information gets submitted for t[he scholarships delete the added placeholder info*/
  const [event, setEvent] = useState<EventData>({
    eventName: "BasketBall Event",
    
    date: "08/08/2022",
    description: "The description of why Uncle Timmy was the best and how he gave so much to the school goes here Break the writing process up into manageable chunks; this helps you to excel at each stage and plan your time so that you hit your deadline. Follow these 7 stages to achieve optimal results from your writin",
    
    entranceFee: 12,
    status: true
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalHeading, setModalHeading] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [inputBox, setInputBox] = useState(true);

  let { id } = useParams();

  function handlePopup(title: string, desc: string) {
    if (!localStorage.getItem("user")) {
      setModalDescription(desc);
      setModalHeading(title);
      setShow(true);
    } else {
      handleGift();
    }
  }
  function handleGift() {
    setShow(true);
    setModalHeading("Event entry");
    setModalDescription("The entry fee for the event is $" + event.entranceFee );
    setInputBox(false);
  }

  function handleFinal() {
    if (localStorage.getItem('user')) {
      console.log('test');
    } else {
      navigate("/login");
    }
  }

  return (
    <div
      className="container"
      style={{ paddingTop: "110px", paddingBottom: "100px" }}
    >
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "0px" }}>
          {modalDescription}
        </Modal.Body>
        <Modal.Footer style={{ paddingTop: "0px", marginTop: "0px" }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ marginTop: "45px" }}
          >
            Close
          </Button>
          {localStorage.getItem("user") ? (
            <div>
              {" "}
              <Payment amount={event.entranceFee} />{" "}
            </div>
          ) : (
            <Button
              variant="warning"
              style={{ marginTop: "45px" }}
              onClick={() => handleFinal()}
            >
              Login
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div>
              <img
                className="card-img-top"
                src="https://bloximages.newyork1.vip.townnews.com/hannapub.com/content/tncms/assets/v3/editorial/1/3c/13c54f92-6a47-11ec-9b41-fb5ddaa8203d/61cf157cd2ff8.image.jpg?resize=1200%2C800"
                alt="..."
                height="auto"
                width="auto"
                style={{ opacity: 25, filter: "blur(2.5px)" }}
              />
            </div>
            <h2
              className="card-title"
              style={{
                position: "absolute",
                top: "70%",
                left: "10%",
                color: "white",
                fontSize: "45px",
              }}
            >
              {event.eventName}
            </h2>
          </div>

          <div className="card" style={{ height: "100%" }}>
            <div className="card-body">
              <div style={{ paddingLeft: "85%",  }}>
                <a
                  className="btn btn-warning"
                  href="#!"
                  onClick={() =>
                    handlePopup(
                      "Please Log in",
                      "You need to be a member to gift in a scholarship"
                    )
                  }
                >
                  Attend the event
                </a>
              </div>
              <div className="small text-muted"> {event.date} </div>
              <p className="card-text">{event.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div
              className="card-header"
            >
              <h3>Event Venue</h3>
            </div>
            <div className="card-body">
            <div style={{ paddingTop: "30px", fontSize:'20px'}}>
              <div >
                <i className="fa fa-map-marker" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                  1000 Adress of Member
              </div>
              <div >
                <i className="fa fa-phone" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                  3184568383
              </div>
              <div >
                <i className="fa fa-envelope" style={{fontSize:'20px', paddingRight:'15px', paddingBottom:'25px'}}></i>
                 <a href="#"> member@company.com</a>
              </div>
              
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
