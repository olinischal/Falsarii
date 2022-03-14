import { Formik, ErrorMessage, Field } from "formik";

import MembershipSchema from "./membership-validation";
import { Button, Form, Container } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

interface membershipProps {
  address: string;
  city: string;
  zipCode: string;
  state: string;
  birthDate: Date;
  graduationDate: string;
  preferredName: string;
  university: string;
  honors: string;
  friendName: string;
  alumniYear: string;
  highSchool: string;
  memberType: string;
}

const initialValues: membershipProps = {
  address: "",
  city: "",
  zipCode: "",
  state: "",
  birthDate: new Date(""),
  graduationDate: "",
  preferredName: "",
  university: "",
  honors: "",
  friendName: "",
  alumniYear: "",
  highSchool: "",
  memberType: "",
};

const Membership = () => {
  const submitForm = (values: membershipProps) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={MembershipSchema}
    >
      {(formik) => {
        const { values, handleChange, handleBlur, handleSubmit } = formik;
        return (
          <>
            <Container
              className="mt-5"
              style={{ width: "30rem", padding: "2rem" }}
            >
              <div
                style={{
                  width: "25rem",
                  backgroundColor: "#F0F8FF",
                  borderRadius: "10px",
                  margin: "20px",
                  padding: "40px",
                }}
              >
                <Form onSubmit={handleSubmit}>

                <div id="my-radio-group">Membership</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="memberType" value="Gold Lifetime: 5,000" />
              Gold Lifetime - $ 5,000.00
            </label>
            <label>
              <Field type="radio" name="memberType" value="Black 10 Year: 2,500 " />
              Black 10 Year - $ 2,500.00
            </label>
            <label>
              <Field type="radio" name="memberType" value="White 5 Year: 1,500.00" />
              White 5 Year - $ 1,500.00
            </label>
            <label>
              <Field type="radio" name="memberType" value="Bengal: 275.00" />
              Bengal - $ 275.00
            </label>
            <label>
              <Field type="radio" name="memberType" value="Bengal Couple: 275.00" />
              Bengal Couple - $ 275.00
            </label>
            
            <div>Picked: {values.memberType}</div>
          </div>


                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="address">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="city"
                      id="city"
                      placeholder="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="city">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      placeholder="zipCode"
                      value={values.zipCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="zipCode">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <label>State</label>
                    <Form.Control
                      type="state"
                      name="state"
                      id="state"
                      placeholder="state"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="state">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dob">
                    <label>Birth Date</label>
                    <Form.Control
                      type="date"
                      name="birthDate"
                      placeholder="Date of Birth"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage name="birthDate">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="dob">
                    <label>Graduation Date</label>
                    <Form.Control
                      type="date"
                      name="graduationDate"
                      placeholder="Graduation Date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="graduationDate">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="preferredName"
                      id="preferredName"
                      placeholder="preferredName"
                      value={values.preferredName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="preferredName">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="university"
                      id="university"
                      placeholder="university"
                      value={values.university}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="university">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="honors"
                      name="honors"
                      id="honors"
                      placeholder="honors"
                      value={values.honors}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="honors">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="friendName"
                      id="friendName"
                      placeholder="Friend of the Year"
                      value={values.friendName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="friendName">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="alumniYear"
                      id="alumniYear"
                      placeholder="Alumni of the Year"
                      value={values.alumniYear}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="alumniYear">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="highSchool"
                      id="highSchool"
                      placeholder="highSchool"
                      value={values.highSchool}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="highSchool">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  <Button variant="success" size="lg" type="submit">
                    Confirm Contribution
                  </Button>
                </Form>
              </div>
            </Container>
          </>
        );
      }}
    </Formik>
  );
};

export default Membership;
