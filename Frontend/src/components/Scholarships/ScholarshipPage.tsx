
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

{/* import { useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";
import "bootstrap/dist/css/bootstrap.css";


import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Payment from "../Payment/Payment";



const ScholarshipPage = () => {

    const navigate = useNavigate();

  
  const [scholarship, setScholarship] = useState<ScholarshipData>({
    scholarshipName: "Uncle Timmy Memorial Scholarship ",
    description:
      "The description of why Uncle Timmy was the best and how he gave so much to the school goes here Break the writing process up into manageable chunks; this helps you to excel at each stage and plan your time so that you hit your deadline. Follow these 7 stages to achieve optimal results from your writin",
    deadline: "05/20/9999",
    status: false,
  });

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [modalHeading, setModalHeading] = useState("");
const[modalDescription, setModalDescription] = useState("");
const[inputBox, setInputBox] = useState(true);
const[buttonName, setButtonName] = useState("Go to login page");
const[amount,setAmount]= useState(0);

  let { id } = useParams();

function handlePopup(title:string, desc:string){
    if(!localStorage.getItem('user')){
      
            setModalDescription(desc);
            setModalHeading(title);
            setShow(true);
    }
    else{
        handleGift();
    }
}
function handleGift(){
    setShow(true);
    setModalHeading("Donation");
    setModalDescription("Enter the desired amount of donation")
    setInputBox(false);
    setButtonName("Donate");
}

function handleFinal(){
    if(buttonName=="Donate"){
        console.log(buttonName=="Donate");

    }
    else{
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
        <Modal.Body style={{paddingBottom:'0px'}}>
            {modalDescription}
        {<input hidden={inputBox} type='text' name="amount" style={{marginLeft:'20px'}} onChange={(e)=>setAmount(parseInt(e.target.value))}/>}
        </Modal.Body>
        <Modal.Footer style={{paddingTop:'0px', marginTop:'0px'}}>
          <Button variant="secondary" onClick={handleClose} style={{marginTop:'45px'}}>
            Close
          </Button>
          {localStorage.getItem('user')? <div > <Payment amount={amount}/> </div>: <Button variant="warning" style={{marginTop:'45px'}} onClick={()=>handleFinal()}>
            {buttonName}
          </Button>}
        </Modal.Footer>
      </Modal>
      <div className="row">
        <div className="col-lg-8">
          <div className="card"  >
            <div>
              <img
                className="card-img-top"
                src="https://architectureassociatesinc.com/wp-content/uploads/2019/03/Neville3.jpg"
                alt="..."
                height="auto"
                width="auto"
                style={{opacity:25, filter: 'blur(2.5px)'}} />
            </div>
       <h2 className="card-title" style={{position:'absolute', top:'70%', left:'10%', color:'white', fontSize:'45px'}}>{scholarship.scholarshipName}</h2>

          </div>
          
          <div className="card" style={{height:'100%'}}>
            <div className="card-body" >
            <div style={{paddingLeft:'85%'}}>
              <a className="btn btn-warning" href="#!" onClick={()=>handlePopup("Please Log in", "You need to be a member to gift in a scholarship")}>
                Make a gift
              </a>
              </div>
              <div className="small text-muted"> {scholarship.deadline} </div>
              <p className="card-text">{scholarship.description}</p>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4" >
            <div className="card-header" style={{backgroundColor:'#ffc40c', color:'#353839'}}>Donators list side bar</div>
            <div className="card-body">
              List of donators and the amount they have given */}

            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default ScholarshipPage;
