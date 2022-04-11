import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),
  
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),
  
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Invalid phone number"
      ),
  
    email: Yup.string()
    .email('Please input the right email format')
    .required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Please retype the same password"),

  });


  export default SignupSchema;