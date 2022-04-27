import * as Yup from "yup";
import {object, string} from 'yup';

const SecondStep = object({
    graduationDate: Yup.string().required("Date Required"),

  university: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
    
//   honors: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Firstname is required"),
//   friendName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Firstname is required"),
//   alumniYear: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("alumniYear is required"),
  highSchool: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .required("HighSchool is required"),
})
export default SecondStep;