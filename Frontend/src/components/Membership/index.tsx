import { Form, Formik, Field, FormikConfig, FormikValues } from "formik";

import MembershipSchema from "./membership-validation";
import "./index.css";
import {
  Card,
  CardContent,
  Box,
  Stepper,
  Step,
  StepLabel,
  FormLabel,
  FormControlLabel,
  makeStyles,
  Grid,
  FormGroup,
} from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { TextField } from "formik-material-ui";
import React, { Fragment, useEffect, useState } from "react";
import FirstStep from "./firstStepValidation";
import SecondStep from "./secondStepValidation";
import { Button, Image } from "react-bootstrap";
import Payment from "../Payment/Payment";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Navigate } from "react-router";

const sleep = (time) => {
  new Promise((acc) => setTimeout(acc, time));
};

export default function Membership() {
  interface membershipProps {
    fname: string;
    middleName: string;
    lname: string;
    maidenName: string;
    spouseFname: string;
    spouseMiddleName: string;
    spouseLname: string;
    spouseMaidenName: string;
    emailId: string;
    phoneNum: string;
    spousePhoneNum: string;
    address: string;
    city: string;
    zipCode: string;
    state: string;
    birthDate: Date;

    graduationDate: Date;
    university: String;
    interest: String;
    membershipFee: number;
  }

  const initialValues: membershipProps = {
    fname: "",
    middleName: "",
    lname: "",
    maidenName: "",
    spouseFname: "",
    spouseMiddleName: "",
    spouseLname: "",
    spouseMaidenName: "",
    emailId: "",
    phoneNum: "",
    spousePhoneNum: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    birthDate: new Date(""),

    graduationDate: new Date(""),
    university: "",
    interest: "",
    membershipFee: 0,
  };

  const sectors = [
    "Soccer",
    "Tennis",
    "Dance",
    "Athletic",
    "CheerLeading",
    "Painting",
    "College Involvement",
    "Arts",
    "Baseball",
    "Softball",
    "BodyBuilding",
  ];

  const [involvement, setInvolvement] = React.useState<string[]>([]);
  const handleInvolvement = (event: SelectChangeEvent<typeof involvement>) => {
    const {
      target: { value },
    } = event;
    setInvolvement(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(involvement);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [amount, setAmount] = useState(30);

  const [isAlumni, setIsAlumni] = useState(true);
  const [schoolValue, setSchoolValue] = useState("Naville High School");

  //    const handleCheckbox=(e)=>{
  //     const checkBox = e.target.checked;
  //     {e.target.checked?setIsAlumni(true):setIsAlumni(false)}
  //     console.log(isAlumni);
  //     if(isAlumni){ setSchoolValue("Naville High School");}
  // }

  // function handleCheckbox(e){
  //   {e.target.checked?setIsAlumni(true):setIsAlumni(false)}
  //   if(isAlumni){ setSchoolValue("Naville High School");}
  // }

  const [submitted, setSubmitted] = useState(false);
  return (
    <Card
      style={{
        paddingTop: "40px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CardContent>
        <FormikStepper
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log("This is amount: " +amount);
            console.log("This is the list of involvement: "+ involvement);
            await sleep(3000);
            console.log('high school is : ')
            console.log(isAlumni ? "Naville High School" : schoolValue);
            console.log("These are other field values: ", values);

            setSubmitted(true);
          }}
        >
          <FormikStep label="Personal Information" validationSchema={FirstStep}>
            <Box paddingBottom={4}>
              <Field
                autoComplete="off"
                variant="standard"
                color="warning"
                fullwidth
                style={{ paddingRight: "50px", width: "300px" }}
                name="fname"
                component={TextField}
                label="First Name"
              />
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="middleName"
                component={TextField}
                label="Middle Name"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="lname"
                component={TextField}
                label="Last Name"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="maidenName"
                component={TextField}
                label="Maiden Name"
                style={{ width: "300px" }}
              />
            </Box>

            <Box paddingBottom={4}>
              <Field
                variant="standard"
                InputLabelProps={{ shrink: true }}
                color="warning"
                name="birthDate"
                type="date"
                component={TextField}
                label="Date of Birth"
              />
            </Box>

            <Box paddingBottom={4}>
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="spouseFname"
                component={TextField}
                label="Spouse First Name"
                style={{ paddingRight: "50px", width: "300px" }}
              />
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="spouseMiddleName"
                component={TextField}
                label="Spouse Middle Name"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="spouseLname"
                component={TextField}
                label="Spouse Last Name"
                style={{ paddingRight: "50px", width: "300px" }}
              />
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="spouseMaidenName"
                component={TextField}
                label="Spouse Maiden Name"
                style={{ width: "300px" }}
              />
            </Box>

            <Box paddingBottom={2}>
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="emailId"
                component={TextField}
                label="Email"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="phoneNum"
                component={TextField}
                label="Phone Number"
                style={{ paddingRight: "50px", width: "300px" }}
              />
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="spousePhoneNum"
                component={TextField}
                label="Spouse Phone Number"
                style={{ width: "300px" }}
              />
            </Box>

            <Box paddingBottom={4}>
              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="address"
                component={TextField}
                label="Address"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="city"
                component={TextField}
                label="City"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="zipCode"
                component={TextField}
                label="ZipCode"
                style={{ paddingRight: "50px", width: "300px" }}
              />

              <Field
                variant="standard"
                color="warning"
                fullwidth
                name="state"
                type="state"
                component={TextField}
                label="State"
              />
            </Box>
          </FormikStep>

          <FormikStep
            label="High School Information"
            validationSchema={SecondStep}
          >
            <Box paddingBottom={4}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  name="highSchool"
                  value="Naville High School"
                  label="Naville High School Alumni?"
                  checked={isAlumni}
                  onChange={()=>isAlumni?setIsAlumni(false): setIsAlumni(true)}
                  
                />
              </FormGroup>
            </Box>
            {!isAlumni?
            <Box paddingBottom={4}>
              <Field
                disabled={isAlumni}
                variant="standard"
                color="warning"
                fullwidth
                name="highSchool"
                value={schoolValue}
                onChange={(e)=> setSchoolValue(e.target.value)}
                component={TextField}
                label="High School"
              />
            </Box>:<>{setSchoolValue("Naville High School")}</> }
            {/* <div>{()=>setSchoolValue("Naville High School")}</div>} */}

            <Box paddingBottom={4}>
              <Field
                InputLabelProps={{ shrink: true }}
                color="warning"
                name="graduationDate"
                type="date"
                component={TextField}
                label="Graduation Date"
              />
            </Box>

            <Box paddingBottom={4}>
              <Field
                style={{ width: "100%" }}
                fullwidth="true"
                variant="standard"
                color="warning"
                name="university"
                component={TextField}
                label="University"
              />
            </Box>

            <Box paddingBottom={4}>
              <Field
                style={{ width: "100%" }}
                variant="standard"
                color="warning"
                fullwidth
                name="interest"
                component={TextField}
                label="Interest"
              />
            </Box>

            <Box paddingBottom={4}>
              <FormControl style={{ width: "80%" }}>
                <InputLabel id="involvement-label">Involvement</InputLabel>
                <Select
                  name="involvement"
                  labelId="involvement-label"
                  multiple
                  value={involvement}
                  onChange={handleInvolvement}
                  input={<OutlinedInput color="warning" label="Involvement" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {sectors.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={involvement.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </FormikStep>

          <FormikStep label="Membership Type">
            <Box paddingBottom={4}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Membership Type
                </FormLabel>
                <RadioGroup
                  // defaultValue={40}
                  name="membershipFee"
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  value={amount}
                >
                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px", marginTop: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Naville Always Single</b>
                        </h5>
                        <p className="card-text">
                          This is the regular single membership. <br />
                          It is <b>$30</b> per year.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={30}
                          control={<Radio />}
                          label="$30"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Naville Always Couple</b>
                        </h5>
                        <p className="card-text">
                          This is the couple membership. <br />
                          It is <b>$40</b> per year.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={40}
                          control={<Radio />}
                          label="$40"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Junior Member under 25yrs</b>
                        </h5>
                        <p className="card-text">
                          This is the membership for new graduates and whoevers
                          is below 25 yrs. <br />
                          It is <b>$20</b> per year.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={20}
                          control={<Radio />}
                          label="$20"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Bengal Single or Couple</b>
                        </h5>
                        <p className="card-text">
                          This is special membership for single or couple with
                          special features. <br />
                          It is <b>$250</b> per year.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={275}
                          control={<Radio />}
                          label="$275"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Black and Gold Single or Couple</b>
                        </h5>
                        <p className="card-text">
                          This is special membership for single or couple with
                          special features.
                          <br />
                          It is <b>$125</b> per year.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={125}
                          control={<Radio />}
                          label="$125"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>White Level Membership</b>
                        </h5>
                        <p className="card-text">
                          This is five years membership. <br />
                          It is <b>$1500</b>.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={1500}
                          control={<Radio />}
                          label="$1500"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Black Level Membership</b>
                        </h5>
                        <p className="card-text">
                          This is 10 years membership. <br />
                          It is <b>$3000</b>.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={3000}
                          control={<Radio />}
                          label="$3000"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Gold Level</b>
                        </h5>
                        <p className="card-text">
                          This is lifetime membership. <br />
                          It is <b>$5000</b>.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={5000}
                          control={<Radio />}
                          label="$5000"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Sustainaing members - Single</b>
                        </h5>
                        <p className="card-text">
                          This is the regular single membership for sustaining
                          members. <br />
                          It is <b>$10</b> monthly draw.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={10}
                          control={<Radio />}
                          label="$10"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card w-500 h-100"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="card-body" style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Image
                          src={require("./NAFA_Logo.PNG")}
                          alt=""
                          height="60"
                          rounded
                        />
                      </div>
                      <div style={{ flex: 2, paddingRight: "100px" }}>
                        <h5 className="card-title">
                          <b>Sustainaing members - Couple</b>
                        </h5>
                        <p className="card-text">
                          This is the regular couple membership for sustaining
                          members. <br />
                          It is <b>$15</b> monthly draw.
                        </p>
                      </div>
                      <div>
                        <FormControlLabel
                          value={15}
                          control={<Radio />}
                          label="$15"
                        />
                      </div>
                    </div>
                  </div>
                  <Payment amount={amount} type="submit" />
                </RadioGroup>
              </FormControl>
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
 // const childrenArray = React.Children.toArray(children: React.ReactNode ) as React.ReactElement<FormikStepProps>[];
 const childrenArray = React.Children.toArray(null ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": { color: "#ffc40c" },
      "& .MuiStepIcon-completed": { color: "green" },
      "& .Mui-disabled .MuiStepIcon-root": { color: "#ffc40c" },
    },
  }));
  const c = useStyles();
  const [show, setShow] = useState(true);

  const submitForm = (amount) => {
    console.log(amount);
  };
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
          // helpers.resetForm();
          // setStep(0);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper className={c.root} alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  style={{ width: "100px" }}
                  variant="warning"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              {!isLastStep() ? (
                <Button
                  disabled={isSubmitting}
                  style={{ width: "100px" }}
                  variant="warning"
                  type="submit"
                >
                  {isSubmitting
                    ? "Submitting"
                    : isLastStep()
                    ? "Submit"
                    : "Next"}
                </Button>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
