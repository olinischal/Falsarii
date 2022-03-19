import { Formik, ErrorMessage } from "formik";
import SignupSchema from "./signup-validation";
import { Button, Form, Container } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { signIn } from "../../services/authenticate-service";
import ReCAPTCHA from "react-google-recaptcha";
import "./index.css";
import {register} from "../../services/authenticate-service";
import { useState } from "react";

interface signupProps {
  firstName: string;
  maidenName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
 
  password: string;
  confirmPassword: string;
  // response:string
}

const initialValues: signupProps = {
  firstName: "",
  maidenName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  
  password: "",
  confirmPassword: "",
  // response:""
};
let captcha;




const Signup = () => {

  const [response, setResponse] = useState('');

  const navigate = useNavigate();
  const submitForm = (values: signupProps) => {
    console.log("Now" +response);
    try {     
      register(values.firstName, values.maidenName,values.lastName,values.phoneNumber,
         values.email, values.password, response)
      .then(() => {
        navigate("/login");
        window.location.reload();
      });
    } catch (error) {
      console.log("Error...");
    }

    captcha.reset();

  };

  const onChangeCaptcha=(e) =>{
    setResponse(e);
  }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={SignupSchema}
    >
      {(formik) => {
        const { values, handleChange, handleBlur, handleSubmit } = formik;
        return (
          <>
            <Container
              className="mt-5"
              style={{ width: "30rem", padding: "2rem" }}
            >
              
              <div style={{
                width: "25rem",
                backgroundColor: "#F0F8FF",
                borderRadius: "10px",
                margin: "20px",
                padding: "40px",
                }}>

                 

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  

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
                  {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </Form.Group>

                <Form.Group className="mb-3">
                  

                  <Form.Control
                    type="text"
                    name="maidenName"
                    id="maidenName"
                    placeholder="Maiden Name"
                    value={values.maidenName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  
                </Form.Group>

                <Form.Group className="mb-3">
                  
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
                     {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </Form.Group>
                <Form.Group className="mb-3">
                  
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
                     {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="dob">
                    
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
                </Form.Group> */}
                


                <Form.Group className="mb-3">
                  
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
                     {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </Form.Group>
                <Form.Group className="mb-3">
                  
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
                     {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </Form.Group>

                <Form.Group className="mb-3">
                  
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    id="password"
                    placeholder="Retype-Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <ErrorMessage name="confirmPassword">
                     {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </Form.Group>

                {/* <ReCAPTCHA
                    sitekey="6Ld-YKgeAAAAAKDx-GaTPgzij6roHZFLJTiAsbMP"
                    name="response"
                    value= {values.response}
                    onChange={handleChange}
                  /> */}

                  <ReCAPTCHA
                    sitekey="6Ld-YKgeAAAAAKDx-GaTPgzij6roHZFLJTiAsbMP"
                    onChange={onChangeCaptcha}
                    ref={el => { captcha = el; }}
                  />

                <Button
                  variant="success"
                  size="lg"
                  type="submit"
                >
                  Sign Up
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

export default Signup;
