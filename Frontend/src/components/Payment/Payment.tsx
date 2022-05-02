import Stripe from "react-stripe-checkout";
import axios from "axios";
import "./Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router";

import StripeCheckout from "react-stripe-checkout";
import Success from "./Success";





const email = JSON.stringify(localStorage.getItem("userEmail"));

function Payment(props) {
  console.log(email);
  
  var totalAmount = props.amount;
  if (totalAmount < 1) {
    totalAmount = 1;
  }else if(totalAmount>=1){
    totalAmount=totalAmount;
  }else{
    totalAmount=1;
  }
  const navigate = useNavigate();
  async function handleToken(token) {
    await axios
      .post("http://localhost:8080/payment/charge", "", {
        headers: {
          token: token.id,
          // amount: totalAmount,
          amount: totalAmount,
        },
      })
      .then((response) => {
        console.log(response);
          window.open(response.data);
          // <Success receiptUrl= {response.data}/>
        navigate("/success");
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* <div>Must be at least $0.5
        <label style={{position: "relative", left:"15px"}}>$</label>
        <input type="text" name="amount" placeholder="" style={{textIndent:"15px", marginTop:"20px"}}onChange={e => setTotalAmount(e.target.value)} />
      </div> */}
      <div className="payment" style={{ marginTop: "20px" }}>
        <StripeCheckout
          name={"$ " + totalAmount + " Payment"}
          description="For Naville Alumni Association"
          panelLabel="Pay Now"
          // ComponentClass="edit"
          billingAddress={true}
          zipCode={true}
          ComponentClass="<div>This is what</div>"
          allowRememberMe
          email={email}
          image="https://www.nevillealumni.org/sites/default/files/nafa_logo_108x114_1.png"
          stripeKey="pk_test_51KTBqNJCsBkQnwT7z2KEfRRafm2mIQWSL2tuekmlD6kpHznIPsFXBbz5iooy4AajyO9LdYdvO7LLg0ICACezlX2G00mL9R7QwH"
          token={handleToken}
        />
      </div>
    </div>
  );
}
export default Payment;
