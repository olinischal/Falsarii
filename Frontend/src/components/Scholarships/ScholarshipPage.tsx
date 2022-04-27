import { useContext, useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Authenticate from "../../Context/Authenticate";
import { useParams } from "react-router";
import { Button, Container, Modal, Form } from "react-bootstrap";
import { Formik } from "formik";
import Payment from "../Payment/Payment";

const ScholarshipPage  = () => {

    const {id}:any = useParams() ;

    
    const {scholarshipDetail}: any = useContext(Authenticate);

    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(' ');

    const handleClose = () => setShow(false);
    
    let initialValue = 0;

    const submitForm = () => {
    
        setShow(false);
       
        
        //window.location.reload();
    
        
      };

    
      
      return(
          <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                  <Container
                    className="mt-5"
                    style={{ width: "30rem", padding: "2rem" }}
                  >
                    <Form id="submitForm" >
                      <Form.Group className="mb-3">
                        <Form.Control
                         
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Event Title"
                          value={amount}
                          onChange={(e) =>
                            setAmount(
                              e.target.value,
                            )}
                         
                        />
                        </Form.Group>
                        </Form>
                        
                  </Container>
                  </div>
               
          </Modal.Body>
          <Modal.Footer>
            
            
              <Payment />
            
          </Modal.Footer>
        </Modal>



     <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="card mb-4">
                    <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                    <div className="card-body">
                        <div className="small text-muted"> {scholarshipDetail[id - 1].deadline} </div>
                        <h2 className="card-title">{scholarshipDetail[id - 1].scholarshipName}</h2>
                        
                        <a className="btn btn-primary" href="#!" onClick={()=>{setShow(true)}}>Donate</a>
                    </div>
                </div>
                
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">Donators list side bar</div>
                    <div className="card-body">List of donators and the amount they have given</div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-8">
                <div className="card mb-4">
                <div className="card-body">

                <p className="card-text">{scholarshipDetail[id - 1].description}</p>

                    </div>

                    </div>
                    </div>
                    </div>

    </div>
    </>

      )}

export default ScholarshipPage;