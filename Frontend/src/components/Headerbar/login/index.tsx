import { Formik, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import LoginSchema from "./login-validation";

import { Button, Form, Container } from "react-bootstrap";

import "./index.css";
import { signIn } from "../../../services/authenticate-service";

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
  let temp;
  const submitForm = (values: loginProps) => {
    try {
      temp = signIn(values.email, values.password).then(() => {
        navigate("/profile/user");
        window.location.reload();
      });
    } catch (error) {
      console.log("Error ..");
    }
  };

  return (
    <Container className="back">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={submitForm}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Container
              className="outerbox"
              style={{ width: "30rem", padding: "2rem" }}
            >
              <div
                className="innerbox"
                style={{
                  width: "25rem",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  alignContent: "center",
                  padding: "80px",
                  marginLeft: "5px",
                }}
              >
                <h6>Email</h6>
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
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>
                  <h6>Password</h6>
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
                  <Button variant="warning" size="lg" type="submit">
                    Login
                  </Button>
                  <p>
                    Forgot <Link to="/">password?</Link>
                    <span className="float-end">
                      <Link to="/signup">Sign Up</Link>
                    </span>
                  </p>
                </Form>
              </div>
            </Container>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Login;
