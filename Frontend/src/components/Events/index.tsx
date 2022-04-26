import { Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";
import EventData from "../../types/Event";
import UpdateEvent from "./UpdateEvent";
import 'bootstrap/dist/js/bootstrap.bundle';

interface eventProps {
  title: string;
  address: string;
  date: string;
}
const initialValues = {
  title: "",
  address: "",
  date: "",
};

const Events = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //remove later
  const [events, setEvents] = useState<EventData>({
    title: " ",
    address: " ",
    date: " ",
    description: " ",
    deadline: " ",
    anonymity: false,
    amount: 0.0,
  });

  const submitForm = (values: eventProps) => {
    console.log(values);
    setEvents({ ...events, title: values.title });
    setEvents({ ...events, address: values.address });
    setEvents({ ...events, date: values.date });
    setShow(false);
  };

  return (
    <>
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
            <Modal.Title>New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik initialValues={initialValues} onSubmit={submitForm}>
              {(formik) => {
                const { values, handleChange, handleBlur, handleSubmit } =
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
                            formik.errors.title && formik.touched.title
                              ? "errorOccured"
                              : "noError"
                          }
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
                          type="text"
                          name="title"
                          id="title"
                          placeholder="Event Title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className={
                            formik.errors.address && formik.touched.address
                              ? "errorOccured"
                              : "noError"
                          }
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
                          type="text"
                          name="address"
                          id="address"
                          placeholder="address"
                          value={values.address}
                          onChange={handleChange}
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
                          value={values.date}
                          onChange={handleChange}
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
      <UpdateEvent events={events} />

      { <section className="py-5">
      <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="card mb-4">
                    <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                    <div className="card-body">
                    <h2 className="card-title">{events.title}</h2>
                    <div className="small text-muted"><h5>Event location {events.address} </h5> </div>
                    <div className="small text-muted"><h5>Event price ${events.amount} </h5> </div>
                        <div className="small text-muted"><h5>Payment deadline {events.deadline} </h5> </div>
                        {/*This is the start of the drop down button. The button is placed right but does not toggle.
                           I'm not sure if its a CSS issue or bootstrap one.*/}
                        <div className = "text-end">
                        <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false">Event Options</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#!" >Reserve Online</a>
                                <a className="dropdown-item" href= "#!">Make a Contribution</a>
                                <a className="dropdown-item" href="#!">Pay in person</a>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header"><h2>Contributors</h2></div>
                    <div className="card-body">List of contributors to the event</div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">{events.description}</p>
                        <div className= "text-end">
                          {/*replace the following <a></a> with the drop down button from above to place it in the description box*/}
                        <a className="btn btn-primary" href="#!">Make Reservation</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header"><h2> Contact Us</h2></div>
                    <div className="card-body"><p>Email Address</p>
                    <p>Phone number</p></div>
                </div>
            </div>
        </div>
    </div>
  </section>}
    </>
  );
};

export default Events;
