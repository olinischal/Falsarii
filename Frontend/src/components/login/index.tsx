import React from "react";
import { Formik, ErrorMessage } from "formik";
import {Link} from 'react-router-dom';
import LoginSchema from "./login-validation";
import { Button, Form, Container} from "react-bootstrap";
import axios from "axios";

interface loginProps {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

const submitForm = (values: loginProps) => {
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

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={submitForm}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          
           <Container className="mt-5" 
            style={{ width: "30rem", padding: "2rem"}} > 
              
              <div style={{
                width: "25rem",
                backgroundColor: "#F0F8FF",
                borderRadius: "10px",
                margin: "20px",
                padding: "40px",
                }}>
                < h3>Sign in</h3>

                <Form onSubmit={handleSubmit}>
               
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
                      {(msg) => <div>{msg}</div>}
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
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                    </Form.Group>
                    <Button
                      variant="warning"
                      size="lg"
                      type="submit"
                    >
                      Sign In
                    </Button>
                    <p>
                    Forgot <Link to="/">password?</Link>
                
                <span className="float-end"><Link to="/signup" >Sign Up</Link></span> 
                </p> 
                </Form>
                </div>
            </Container> 
          
        );
      }}
    </Formik>
  );
};

export default Login;