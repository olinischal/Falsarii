import * as Yup from "yup";
import {object, string} from 'yup';

const FirstStep = object({

    fname: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  middleName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("LastName is required"),

  maidenName: Yup.string().min(1, "Too Short!").max(50, "Too Long!"),

  spouseFname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

  spouseMiddleName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

  spouseLname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

  spouseMaidenName: Yup.string().min(1, "Too Short!").max(50, "Too Long!"),

  phoneNum: Yup.string()
    .required("Phone number is required")
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Invalid phone number"
    ),
    emailId: Yup.string()
    .email("Please input the right email format")
    .required("Email is required"),
})

export default FirstStep;