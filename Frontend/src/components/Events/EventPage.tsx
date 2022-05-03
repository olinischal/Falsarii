import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";
import "bootstrap/dist/css/bootstrap.css";

import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Payment from "../Payment/Payment";
import EventData from "../../types/Event";
import Authenticate from "../../Context/Authenticate";
import Editevents from "./Editevents";

const EventPage = () => {
  const navigate = useNavigate();
  let { id }: any = useParams();
  const {eventDetail} : any = useContext(Authenticate);
  const { userDetail }: any = useContext(Authenticate);
  const { auth }: any = useContext(Authenticate);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [donateStatus, setDonateStatus] = useState<boolean>(false);
  const date: any = new Date();
  
  let userRole;
  
  
  if(JSON.stringify(auth) === '{}'){
    userRole = null;
  }else{
    userRole = userRole = auth?.res.roles?.find((role) => userRole = role);
  }

 

  const submitForm = () => {
    
    setShow(false);
  };

 
/*
 
  const [modalHeading, setModalHeading] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [inputBox, setInputBox] = useState(true);

  

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

  */

  function handleFinal() {   
      navigate("/login");
    }
  

  return (
    <>

{userRole === "ROLE_ADMIN"? (
        <Editevents event={eventDetail[id]} />
      ) : (
        <></>
      )}

    
    
    
    
    <div
      className="container"
      style={{ paddingTop: "110px", paddingBottom: "100px" }}
    >
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "0px" }}>
          The entry fee for the event is ${eventDetail[id].entranceFee}
        </Modal.Body>
        <Modal.Footer style={{ paddingTop: "0px", marginTop: "0px" }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ marginTop: "45px" }}
          >
            Close
          </Button>
          {userRole != null ? (
            <div>
              {" "}
              <Payment amount={eventDetail[id].entranceFee} />{" "}
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
              {eventDetail[id].eventName}
            </h2>
          </div>

          <div className="card" style={{ height: "100%" }}>
            <div className="card-body">
              <div style={{ paddingLeft: "85%",  }}>
                <a
                  className="btn btn-warning"
                  onClick={() => {
                    setShow(true);
                  }}
                 
                >
                  Attend the event
                </a>
              </div>
              <div className="small text-muted"> {eventDetail[id].date} </div>
              <p className="card-text">{eventDetail[id].description}</p>
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
    </>
  );
};

export default EventPage;
