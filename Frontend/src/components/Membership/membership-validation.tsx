import * as Yup from "yup";
import {object, string} from 'yup';

const MembershipSchema = object({
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

  spousePhoneNum: Yup.string().matches(
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
    "Invalid phone number"
  ),

  emailId: Yup.string()
    .email("Please input the right email format")
    .required("Email is required"),

  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Address is required"),

  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("City is required"),

  zipCode: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("ZipCode is required"),

  state: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("State is required"),

  birthDate: Yup.string().required("Date Required"),

  graduationDate: Yup.string().required("Date Required"),

  university: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
    
  honors: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),
  friendName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),
  alumniYear: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("alumniYear is required"),
  highSchool: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("HighSchool is required"),
});

export default MembershipSchema;
