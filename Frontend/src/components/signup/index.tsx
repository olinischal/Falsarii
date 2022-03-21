import { Formik, ErrorMessage,getIn} from "formik";
import SignupSchema from "./signup-validation";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authenticate-service";
import ReCAPTCHA from "react-google-recaptcha";
import "./index.css";
import { register } from "../../services/authenticate-service";
import { useState } from "react";

interface signupProps {
  firstName: string;
  maidenName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  graduationDate: string;
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
  graduationDate: "",
  password: "",
  confirmPassword: "",
  // response:""
};
let captcha;

const Signup = () => {
  const [response, setResponse] = useState("");
  const [errorString, setErrorString] = useState("");
  const navigate = useNavigate();
  const submitForm = (values: signupProps) => {
    try {
      register(
        values.firstName,
        values.maidenName,
        values.lastName,
        values.phoneNumber,
        values.email,
        values.graduationDate,
        values.password,
        response
      ).then(() => {
        const error = localStorage.getItem("signupError");
        localStorage.removeItem("signupError");
        if (error) {
          setErrorString(error);
        } else {
          alert("User registered Successfully!");
          navigate("/login");
          window.location.reload();
        }
      });
    } catch (error) {
      console.log("Error...");
    }

    captcha.reset();
  };

  const onChangeCaptcha = (e) => {
    setResponse(e);
  };

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
              className="mt-7"
              style={{ width: "30rem", padding: "2rem", }}
            >
              <div className='box-size'
              >
                <div
                  style={{
                    fontSize: "30px",
                    marginBottom: "25px",
                    fontWeight: "bold",
                    color: "#ffc40c",
                  }}
                >
                  Create your NAFA account
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <div className="row">
                      <div className="col-5">
                        <Form.Control

                          className={(formik.errors.firstName && formik.touched.firstName)? "errorOccured" : 'noError'}
                          style={{backgroundColor:"#353839", color:"#ffc40c"}}
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
                      </div>
                      <div className="col-2">
                        <Form.Control
                          type="text"
                          name="maidenName"
                          id="maidenName"
                          placeholder="MI"
                          value={values.maidenName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(formik.errors.maidenName && formik.touched.maidenName)? "errorOccured" : 'noError'}
                          style={{backgroundColor:"#353839", color:"#ffc40c"}}
                        />
                      </div>
                      <div className="col-5">
                        <Form.Control
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Lastname"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(formik.errors.lastName && formik.touched.lastName)? "errorOccured" : 'noError'}
                          style={{backgroundColor:"#353839", color:"#ffc40c"}}
                        />
                        <ErrorMessage name="lastName">
                          {(msg) => <div className="error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                    
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
                      className={(formik.errors.phoneNumber && formik.touched.phoneNumber)? "errorOccured" : 'noError'}
                      style={{backgroundColor:"#353839", color:"#ffc40c"}}
                    />
                    <ErrorMessage name="phoneNumber">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={(formik.errors.email && formik.touched.email)? "errorOccured" : 'noError'}
                      style={{backgroundColor:"#353839", color:"#ffc40c"}}
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
                      className={(formik.errors.password && formik.touched.password)? "errorOccured" : 'noError'}
                      style={{backgroundColor:"#353839", color:"#ffc40c"}}
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
                      className={(formik.errors.confirmPassword && formik.touched.confirmPassword)? "errorOccured" : 'noError'}
                      style={{backgroundColor:"#353839", color:"#ffc40c"}}
                    />

                    <ErrorMessage name="confirmPassword">
                      {(msg) => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </Form.Group>

                  
                  <div>
                  <ReCAPTCHA
                    sitekey="6Ld-YKgeAAAAAKDx-GaTPgzij6roHZFLJTiAsbMP"
                    onChange={onChangeCaptcha}
                    ref={(el) => {
                      captcha = el;
                    }}
                  />
                  </div>
                  <div style={{paddingTop:'5px'}}>
                  <Button variant="btn btn-outline-warning" size="lg" type="submit">
                    Sign Up
                  </Button>
                  </div>
                </Form>
                {errorString && (
                  <div style={{ color: "red" }}> {errorString} </div>
                )}
              </div>
            </Container>
          </>
        );
      }}
    </Formik>
  );
};

export default Signup;
