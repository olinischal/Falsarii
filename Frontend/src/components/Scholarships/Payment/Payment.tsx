import Stripe from "react-stripe-checkout";
import axios from "axios";
import "./Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const Payment = ({ amount, email, donateStatus }) => {
  const navigate = useNavigate();

  async function handleToken(token) {
    await axios
      .post(
        "http://ec2-3-145-177-24.us-east-2.compute.amazonaws.com:8080/payment/charge",
        "",
        {
          headers: {
            token: token.id,
            amount: amount,
          },
        }
      )
      .then(() => {
        donateStatus(true);
        navigate("/donation-success");
      })
      .catch((error) => {
        navigate("/donation-unsucessfull");
      });
  }
  return (
    <>
      <div className="payment" style={{ marginTop: "20px" }}>
        <Stripe
          name={"$" + amount + " Donation"}
          description="For Neville Alumni Association"
          panelLabel="Donate Now"
          ComponentClass="edit"
          billingAddress={true}
          email={email}
          image="https://www.nevillealumni.org/sites/default/files/nafa_logo_108x114_1.png"
          stripeKey="pk_test_51KTBqNJCsBkQnwT7z2KEfRRafm2mIQWSL2tuekmlD6kpHznIPsFXBbz5iooy4AajyO9LdYdvO7LLg0ICACezlX2G00mL9R7QwH"
          token={handleToken}
        />
      </div>
    </>
  );
};
export default Payment;
