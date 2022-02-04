import React from 'react';
import { Formik, Field, Form, ErrorMessage, getIn,  } from 'formik';
import * as Yup from 'yup';
import AuthService from "../services/auth.service";



const formikForm = () => {

    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
          return {
            border: '1px solid red'
          }
        }
      }
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '', passwordConfirmation: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string()
                    .required('No password provided.')
                    .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                passwordConfirmation: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
            })}

            onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    AuthService.register(
                        (values.username),
                        (values.email),
                        (values.passwordConfirmation)
                    )
                    setStatus("sent");
                    resetForm();
                    setSubmitting(false);

                }, 400);
            }}

        // onSubmit={(values, { setSubmitting }) => {
        //             setTimeout(() => {
        //             alert(JSON.stringify(values, null, 2));
        //              setSubmitting(false);
        //              }, 5);
        //           }}
        >

            <Form>
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" />
                <div style={{ color: 'red' }}>
                <ErrorMessage name="username" />
                </div>


                <label htmlFor="email">Email Address</label>
                <Field  name="email" type="email" />
                <div style={{ color: 'red' }}>
                <ErrorMessage name="email"/>
                </div>


                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <div style={{ color: 'red' }}>
                <ErrorMessage name="password" />
                </div>

                <label htmlFor="passwordConfirmation">Retype Password</label>
                <Field name="passwordConfirmation" type="password" />
                <div style={{ color: 'red' }}>
                <ErrorMessage name="passwordConfirmation"  />
                </div>
                <br />
                <br />
                <button type="submit">Submit</button>

                <button type="reset">Reset</button>

            </Form>
           
        </Formik>
    );
};

export default formikForm;

