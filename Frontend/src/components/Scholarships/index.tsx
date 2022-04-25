import { Formik } from "formik";
import { useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";
import UpdateScholarships from "./UpdateScholarships";
import { ScholarshipRequests } from "../../services/api";
import ScholarshipData from "../../types/Scholarship";
import './Scholarship.css';


const initialValues = {
  name: " ",
  active: false,
  deadline: "",
  description: " ",
};

const Scholarships = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scholarship, setScholarship] = useState<ScholarshipData>({
    scholarshipName: " ",
    description: " ",
    deadline: "",
    status: false,
  });

  const submitForm =  () => {
    console.log(scholarship);

    ScholarshipRequests.createScholarships(scholarship)
    .catch((error) => {
      console.log("Request cannot be completed.", error);
    });
    setShow(false);
    window.location.reload();
  };
  return (
    <>
      <>
        <div style={{ position: "relative", top: "10px", left: "10px" }}>
          <Button variant="secondary" size="lg" onClick={handleShow}>
            + Create New Scholarships
          </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Scholarship</Modal.Title>
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
                      <label className="feedback-subtitle"> Scholarship Name</label>
                        <Form.Control
                          className={
                            formik.errors.name && formik.touched.name
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
                          placeholder="Scholarship Name"
                          value={scholarship.scholarshipName}
                          onChange={(e) =>
                            setScholarship({
                              ...scholarship,
                              scholarshipName: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                      <label className="feedback-subtitle"> Scholarship Description</label>
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
                          placeholder="description"
                          value={scholarship.description}
                          onChange={(e) =>
                            setScholarship({
                              ...scholarship,
                              description: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                      <label className="feedback-subtitle"> Scholarship Deadline</label>
                        <Form.Control
                          className={
                            formik.errors.deadline && formik.touched.deadline
                              ? "errorOccured"
                              : "noError"
                          }
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
                          
                          type="date"
                          name="deadline"
                          id="deadline"
                          placeholder="Event deadline"
                          value={scholarship.deadline}
                          onChange={(e) =>
                            setScholarship({
                              ...scholarship,
                              deadline: e.target.value,
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
      <>
        
        <UpdateScholarships />
      </>
    </>
  );
};

export default Scholarships;
