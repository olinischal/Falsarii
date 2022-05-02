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



const MembershipType=()=>{
    const [amount, setAmount] = useState(30);
    return(
        <div style={{paddingTop:'100px', paddingLeft:'10%'}}>
            <Box paddingBottom={4}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h2 style={{textAlign:'center'}}>Membership Type</h2>
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
        </div>
    )

}
export default MembershipType;