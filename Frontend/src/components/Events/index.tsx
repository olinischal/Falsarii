import { Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";
import EventData from "../../types/Event";
import UpdateEvent from "./UpdateEvent";

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

      {/* <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">All Events</h2>
                            </div>
                        </div>
                    </div>
                    <UpdateEvent events ={events} />
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                                <div className="card-body p-4">

                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Football</h5></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/adb5bd/495057" alt="..." />
                                <div className="card-body p-4">

                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Basketball</h5></a>
                                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
                                <div className="card-body p-4">
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Class of 2014 Reunion</h5></a>
                                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        
         */}
    </>
  );
};

export default Events;
