import { Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";
import { EventRequests } from "../../services/api";
import EventData from "../../types/Event";
import Calendar from "./Calendar";




const initialValues = {
  eventName: "",
  date: "",
  description: "",
  entranceFee: 0.0,
  status: false
};

const CalendarEvents = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const [events, setEvents] = useState<EventData>({
    eventName: "",
    date: "",
    description: "",
    entranceFee: 0.0,
    status: false
  });

  const submitForm = () => {
    
    setShow(false);
    EventRequests.createEvent(events) .catch((error) => {
      console.log("Request cannot be completed.", error);
    });
    setShow(false);
    

    
  };

  return (
    <>
    {/* Uncomment this section once the event API is updated in backend */}
      <div style={{ position: "relative", top: "10px", left: "10px" }}>
        <Button variant="secondary" size="lg" onClick={handleShow}>
          + Create New Event
        </Button>
      </div>

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
            <Formik initialValues={initialValues} onSubmit={submitForm}>
              {(formik) => {
                const { handleBlur, handleSubmit } =
                  formik;
                return (
                  <Container
                    className="mt-5"
                    style={{ width: "30rem", padding: "2rem" }}
                  >
                    <Form id="submitForm" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
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
                          placeholder="Event Title"
                          value={events.eventName}
                          onChange={(e) =>
                            setEvents({
                              ...events,
                              eventName: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className={
                            formik.errors.description && formik.touched.description
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
                          placeholder="description"
                          value={events.description}
                          onChange={(e) =>
                            setEvents({
                              ...events,
                              description: e.target.value,
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
                          type="date"
                          name="date"
                          id="date"
                          placeholder="Event Date"
                          value={events.date}
                          onChange={(e) =>
                            setEvents({
                              ...events,
                              date: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                        />
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
      <Calendar />

    
    </>
  );
};

export default CalendarEvents;
