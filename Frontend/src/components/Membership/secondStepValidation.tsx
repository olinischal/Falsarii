import * as Yup from "yup";
import { object, string } from "yup";

const SecondStep = object({
  graduationDate: Yup.string().required("Date Required"),

  university: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

  highSchool: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
});
export default SecondStep;
