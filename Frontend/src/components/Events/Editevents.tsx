import { Formik } from "formik";
import { useContext, useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";

import Authenticate from "../../Context/Authenticate";
import { useNavigate } from "react-router";
import { eventEdit } from "../../services/api";

const initialValues = {
    eventName: " ",
    status: true,
    date: "",
    description: " ",
    entranceFee: " ",
  };

const EditEvents = ({event}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const navigate = useNavigate();
  
    const [editEvent, setEditEvent] = useState(event);
  
    const submitForm = () => {
      setShow(false);
  
      eventEdit(editEvent.eventId, editEvent)
        .then((response) => {
          console.log("event has been successfully edited", response);
        })
        .catch((error) => {
          console.log("Could not edit event.", error);
        });
      navigate("/events");
     
    };
    console.log("The event is active ", editEvent.status);
    return (
      <>
        <>
          <div style={{ position: "relative", top: "10px", left: "10px" }}>
            <Button variant="secondary" size="lg" onClick={handleShow}>
              + Edit Event
            </Button>
          </div>
  
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik initialValues={initialValues} onSubmit={submitForm}>
                {(formik) => {
                  const { handleBlur, handleSubmit } = formik;
                  return (
                    <Container
                      className="mt-5"
                      style={{ width: "30rem", padding: "2rem" }}
                    >
                      <Form id="submitForm" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <label className="feedback-subtitle">
                            {" "}
                            Event Name
                          </label>
                          <Form.Control
                            className={
                              formik.errors.eventName && formik.touched.eventName
                                ? "errorOccured"
                                : "noError"
                            }
                            style={{
                              backgroundColor: "#353839",
                              color: "#ffc40c",
                            }}
                            type="text"
                            name="name"
                            id="name"
                            value={editEvent.eventName}
                            onChange={(e) =>
                              setEditEvent({
                                ...editEvent,
                                eventName: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <label className="feedback-subtitle">
                            {" "}
                            Event Description
                          </label>
                          <Form.Control
                            className={
                              formik.errors.description &&
                              formik.touched.description
                                ? "errorOccured"
                                : "noError"
                            }
                            style={{
                              backgroundColor: "#353839",
                              color: "#ffc40c",
                            }}
                            type="text"
                            name="description"
                            id="description"
                            value={editEvent.description}
                            onChange={(e) =>
                              setEditEvent({
                                ...editEvent,
                                description: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <label className="feedback-subtitle">
                            {" "}
                            Event date
                          </label>
                          <Form.Control
                            className={
                              formik.errors.date && formik.touched.date
                                ? "errorOccured"
                                : "noError"
                            }
                            style={{
                              backgroundColor: "#353839",
                              color: "#ffc40c",
                            }}
                            type="date"
                            name="date"
                            id="date"
                            value={editEvent.date}
                            onChange={(e) =>
                              setEditEvent({
                                ...editEvent,
                                date: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control
                          className={
                            formik.errors.date && formik.touched.date
                              ? "errorOccured"
                              : "noError"
                          }
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
                          type="number"
                          name="fee"
                          id="fee"
                          placeholder="Entrance Fee"
                          value={editEvent.entranceFee}
                          onChange={(e) =>
                            setEditEvent({
                              ...editEvent,
                              entranceFee: Number(e.target.value),
                            })
                          }
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <div>
                            <input
                              type="checkbox"
                              id="formBasicCheckbox"
                              className="checkbox disable-team team_values"
                              onChange={(e) =>
                                setEditEvent({
                                  ...editEvent,
                                  status:
                                    e.target.checked === true ? false : true,
                                })
                              }
                            />
                            <label id="formBasicCheckbox">
                              Remove Event
                            </label>
                            {editEvent.status === false ? (
                              <p>This will remove the event</p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                        </Form.Group>
                      
                      </Form>
                    </Container>
                  );
                }}
              </Formik>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button form="submitForm" variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
       
      </>
    );
  

}
  

export default EditEvents;