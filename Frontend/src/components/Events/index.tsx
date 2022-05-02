import { Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";
import { EventRequests } from "../../services/api";
import EventData from "../../types/Event";
import UpdateEvent from "./UpdateEvent";


const initialValues = {
  eventName: "",
  date: "",
  description: "",
  entranceFee: 0.0,
  status: false
};






const Events = () => {
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
    
    window.location.reload();

    
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
      <UpdateEvent />

    
    </>
  );
};


//   const navigate = useNavigate();

//   return (
//     <>
//       {/* <section className="py-5" id="events" style={{paddingTop:'0px', backgroundColor:'red'}}> */}
//       <section id="events" style={{ paddingBottom: "0px" }}>
//         <div className="container px-5 my-5">
//           <div className="row gx-5 justify-content-center">
//             <div className="col-lg-8 col-xl-6">
//               <div className="text-center">
//                 <p style={{ fontSize: "20px", paddingBottom:'10px', fontWeight:200, paddingTop:'50px' }}>
//                   <h2><b>
//                   NAFA Events</b></h2>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row gx-5">
//             <div className="col-lg-4 mb-5">
//               <div className="card h-100 shadow border-0">
//                 <div
//                   style={{
//                     height: 100,
//                     backgroundColor: "#353839",
//                     textAlign: "center",
//                     paddingTop: "20px",
//                     color: "#ffc40c",
//                   }}
//                 >
//                   <h2>Class of 2011 Reunion</h2>
//                 </div>
//                 <div className="card-body text-center p-4">
//                   <a
//                     className="text-decoration-none link-dark stretched-link"
//                     href="/eventPage"
//                   >
//                     {/* <h5 className="card-title mb-3">Class of 2011 Reunion</h5> */}
//                   </a>
//                   <p className="card-text mb-0">
//                     If you are class of 2011 please attend the Reunion this
//                     saturday. You can bring your spouse with you.
//                   </p>
//                 </div>
//                 <div className="text-center" style={{ marginBottom: "25px" }}>
//                   <button className="btn btn-warning btn-sm text-dark"   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 mb-5">
//               <div className="card h-100 shadow border-0">
//                 <div
//                   style={{
//                     height: 100,
//                     backgroundColor: "#353839",
//                     textAlign: "center",
//                     paddingTop: "20px",
//                     color: "#ffc40c",
//                   }}
//                 >
//                   <h2>Alumni Basketball</h2>
//                 </div>
//                 <div
//                   className="card-body text-center p-4"
//                   //   style={{ backgroundColor: "#161c2d" }}
//                 >
//                   <a
//                     className="text-decoration-none link-dark stretched-link"
//                     href="#!"
//                   >
//                     {/* <h5 className="card-title mb-3">
//                       Alumni Basketball
//                     </h5> */}
//                   </a>
//                   <p className="card-text mb-0">
//                     {" "}
//                     {/* <span className="text-warning"> */}
//                     This weekend we have alumni basketball tournament. Please
//                     click the button below if you are attending the game.
//                     {/* </span> */}
//                   </p>
//                 </div>
//                 <div className="text-center" style={{ marginBottom: "25px" }}>
//                   <button className="btn btn-warning btn-sm text-dark">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 mb-5">
//               <div className="card h-100 shadow border-0">
//                 <div
//                   style={{
//                     height: 100,
//                     backgroundColor: "#353839",
//                     textAlign: "center",
//                     paddingTop: "20px",
//                     color: "#ffc40c",
//                   }}
//                 >
//                   <h2>Class of 2014 Reunion</h2>
//                 </div>
//                 <div className="card-body p-4">
//                   <a
//                     className="text-decoration-none link-dark stretched-link"
//                     href="#!"
//                   >
//                     {/* <h5 className="card-title mb-3">Class of 2014 Reunion</h5> */}
//                   </a>
//                   <p className="card-text mb-0">
//                     If you are class of 2014 please attend the Reunion this
//                     saturday. You can bring your spouse with you.
//                   </p>
//                 </div>
//                 <div className="text-center" style={{ marginBottom: "25px" }}>
//                   <button className="btn btn-warning btn-sm text-dark">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };


export default Events;
