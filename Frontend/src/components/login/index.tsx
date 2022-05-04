import { Formik, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import LoginSchema from "./login-validation";

import { Button, Form, Container } from "react-bootstrap";

import "./index.css";
import { signIn } from "../../services/authenticate-service";
import { useContext, useEffect, useState } from "react";

import Authenticate from "../../Context/Authenticate";

interface loginProps {
  email: string;
  password: string;
}
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [errorString, setErrorString] = useState("");
  const { setAuth }: any = useContext(Authenticate);

  const submitForm = (values: loginProps) => {
    try {
      signIn(values.email, values.password).then((res) => {
        if (localStorage.getItem("badCredential")) {
          setErrorString("Bad Credentials! Please try again!");
          console.log(errorString);
        } else if (localStorage.getItem("otherError")) {
          setErrorString("Some Error Occured! Please try again!");
        } else {
          navigate("/profile/user");
        }
        console.log(res);
        setAuth({ res });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="parent-login" style={{ height: "600px" }}>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={submitForm}
          >
            {/* {({ values, handleChange, handleBlur, handleSubmit }) => { */}
            {(formik) => {
              const { values, handleChange, handleBlur, handleSubmit } = formik;
              return (
                <Container
                  className="mt-5"
                  style={{ width: "30rem", padding: "2rem" }}
                >
                  <div className="login-box">
                    <div
                      style={{
                        fontSize: "25px",
                        marginBottom: "25px",
                        fontWeight: "bold",
                        color: "#ffc40c",
                      }}
                    >
                      Log in to your account
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className={
                            formik.errors.email && formik.touched.email
                              ? "errorOccured"
                              : "noError"
                          }
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
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
                          className={
                            formik.errors.password && formik.touched.password
                              ? "errorOccured"
                              : "noError"
                          }
                          style={{
                            backgroundColor: "#353839",
                            color: "#ffc40c",
                          }}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <ErrorMessage name="password">
                          {(msg) => <div className="error">{msg} </div>}
                        </ErrorMessage>
                      </Form.Group>
                      <Button variant="warning" size="lg" type="submit">
                        Login
                      </Button>
                      <p>
                        <Link to="/" style={{ color: "#ffc40c" }}>
                          Forgot password?
                        </Link>
                        <span className="float-end">
                          <Link to="/signup" style={{ color: "#ffc40c" }}>
                            Sign Up
                          </Link>
                        </span>
                      </p>
                    </Form>
                    {errorString && (
                      <div style={{ color: "red" }}> {errorString} </div>
                    )}
                  </div>
                </Container>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
