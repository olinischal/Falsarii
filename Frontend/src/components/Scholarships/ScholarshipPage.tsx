import { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Authenticate from "../../Context/Authenticate";
import { useParams } from "react-router";
import { Button, Container, Modal, Form } from "react-bootstrap";
import { Formik } from "formik";
import Payment from "./Payment/Payment";
import { donateScholarship } from "../../services/api";
import EditScholarship from "./EditScholarship";

const ScholarshipPage = () => {
  const { id }: any = useParams();

  const { scholarshipDetail }: any = useContext(Authenticate);
  const { userDetail }: any = useContext(Authenticate);
  const { auth }: any = useContext(Authenticate);

  const [selectScholarship, setSelectScholarship] = useState();

  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState("");

  const [anonymity, setAnonymity] = useState<boolean>(false);

  const handleClose = () => setShow(false);

  const [donateStatus, setDonateStatus] = useState<boolean>(false);
  const date: any = new Date();

  // useEffect(() => {
  //   scholarshipDetail.array.forEach(element => {
  //     if(element.id === id){
  //       setSelectScholarship(element);
  //     }else{
  //       console.log("Could not match scholarship id");
  //     }
      
  //   });
  // },[id])


  let userRole;
  
  
  if(JSON.stringify(auth) === '{}'){
    userRole = null;
  }else{
    userRole = userRole = auth?.res.roles?.find((role) => userRole = role);
  }
 
   

  
  

  const submitForm = () => {
    
    setShow(false);
  };

  useEffect(() => {
    if (donateStatus === true) {
      donateScholarship(
        userDetail.emailId,
        scholarshipDetail[id].scholarshipName,
        date,
        amount,
        anonymity
      )
        .then((response) => {
          console.log("Donation was successfull ", response);
        })
        .catch((error) => {
          console.log("Donation was not successful.", error);
        });
      console.log(
        userDetail.emailId,
        scholarshipDetail[id].scholarshipName,
        date,
        amount,
        "anonymous: ",
        anonymity
      );
    }
  }, [donateStatus]);

  return (
    <>
      {userRole === "ROLE_ADMIN"? (
        <EditScholarship scholarship={scholarshipDetail[id]} />
      ) : (
        <></>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: "12rem" }}>
            <Container
              className="mt-2"
              style={{ width: "30rem", padding: "1rem" }}
            >
              <Form id="submitForm">
                <Form.Group className="mb-3">
                  <label>How much would you like to doante?</label>
                  <Form.Control
                    style={{
                      backgroundColor: "#353839",
                      color: "#ffc40c",
                    }}
                    type="text"
                    name="name"
                    id="name"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>
              </Form>

              <div className="radio-buttons">
                <input
                  id="anonymous"
                  name="platform"
                  type="checkbox"
                  onClick={(e) =>
                    setAnonymity(anonymity === true ? false : true)
                  }
                />{" "}
                <label id="anonymous"> anonymity </label>
                {anonymity === true ? (
                  <p>This will display the Donor name as Anonymous</p>
                ) : (
                  <p></p>
                )}
              </div>
            </Container>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div onClick={submitForm}>
            <Payment
              amount={amount}
              email={userDetail.emailId}
              donateStatus={setDonateStatus}
            />
          </div>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <a href="#!">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="small text-muted">
                  {" "}
                  {scholarshipDetail[id].deadline}{" "}
                </div>
                <h2 className="card-title">
                  {scholarshipDetail[id].scholarshipName}
                </h2>

                <a
                  className="btn btn-primary"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Donators list side bar</div>
              <div className="card-body">
                List of donators and the amount they have given
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <p className="card-text">
                  {scholarshipDetail[id].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScholarshipPage;
