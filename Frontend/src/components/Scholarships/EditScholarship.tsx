import { Formik } from "formik";
import { useContext, useState } from "react";
import { Button, Modal, Stack, Form, Container } from "react-bootstrap";
import UpdateScholarships from "./UpdateScholarships";
import { editScholarships, ScholarshipRequests } from "../../services/api";
import ScholarshipData from "../../types/Scholarship";
import "./Scholarship.css";
import ScholarshipPage from "./ScholarshipPage";
import Authenticate from "../../Context/Authenticate";
import { useNavigate } from "react-router";

const initialValues = {
  name: " ",
  active: false,
  deadline: "",
  description: " ",
};

const Scholarships = ({ scholarship }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [editScholarship, setEditScholarship] = useState(scholarship);

  const submitForm = () => {
    setShow(false);

    editScholarships(editScholarship.scholarshipId, editScholarship)
      .then((response) => {
        console.log("scholarship has been successfully edited", response);
      })
      .catch((error) => {
        console.log("Could not edit scholarship.", error);
      });
    navigate("/scholarships");
   
  };
  console.log("The scholarship is active ", editScholarship.status);
  return (
    <>
      <>
        <div style={{ position: "relative", top: "10px", left: "10px" }}>
          <Button variant="secondary" size="lg" onClick={handleShow}>
            + Edit Scholarships
          </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Scholarship</Modal.Title>
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
                          Scholarship Name
                        </label>
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
                          value={editScholarship.scholarshipName}
                          onChange={(e) =>
                            setEditScholarship({
                              ...editScholarship,
                              scholarshipName: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <label className="feedback-subtitle">
                          {" "}
                          Scholarship Description
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
                          value={editScholarship.description}
                          onChange={(e) =>
                            setEditScholarship({
                              ...editScholarship,
                              description: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <label className="feedback-subtitle">
                          {" "}
                          Scholarship Deadline
                        </label>
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
                          value={editScholarship.deadline}
                          onChange={(e) =>
                            setEditScholarship({
                              ...editScholarship,
                              deadline: e.target.value,
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
                              setEditScholarship({
                                ...editScholarship,
                                status:
                                  e.target.checked === true ? false : true,
                              })
                            }
                          />
                          <label id="formBasicCheckbox">
                            Remove Scholarship
                          </label>
                          {editScholarship.status === false ? (
                            <p>This will remove the scholarship</p>
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
      <>{/* <ScholarshipPage /> */}</>
    </>
  );
};

export default Scholarships;
