import { Formik, ErrorMessage } from "formik";
import SignupSchema from "./signup-validation";
import { Button, Form, Container} from "react-bootstrap";
import axios from "axios";

interface signupProps {
    firstName: string;
    lastName: string;
    phoneNumber: string;    
    email: string;
    password: string;
}

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const submitForm = (values: signupProps) => {
  try {
    axios({
      method: "post",
      url: "http://localhost:8080/member/add",
      data: values,
    }).then((response: {}) => {
      console.log(response);
    });
  } catch (error) {
    console.log("Error...");
  }
};

const Signup = () => {
  return (
    
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={submitForm}
    >
      {(props) => {
        const { values, handleChange, handleBlur } = props;
        return (
         <>
           
           <Container 
           className="mt-5" 
           style={{ width: "18rem", padding: "2rem"}} >
             <h3>Sign Up</h3>
            <Form>
            <Form.Group className="mb-3">

            <Form.Label>Firstname</Form.Label>

            <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Firstname"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="firstName">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Lastname"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="lastName">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>

              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phonenumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="phoneNumber">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>

              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <ErrorMessage name="password">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
              </Form.Group>
              <Button
                      variant="warning"
                      size="lg"
                      onClick={() => {
                        submitForm(values);
                      }}
                    >Sign Up</Button>
            </Form>
            </Container>
          </>
        );
      }}
    </Formik> 
    
  );
};

export default Signup;
