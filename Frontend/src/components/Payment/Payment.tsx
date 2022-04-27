import Stripe from "react-stripe-checkout";
import axios from "axios";
import "./Payment.css";
import { useState } from 'react';
import { useNavigate } from "react-router";



function Payment() {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState('');

  async function handleToken(token) {
    await axios.post("http://localhost:8080/payment/charge", "", {
      headers: {
        token: token.id,
        amount: totalAmount,
      }

      ,
    }).then(() => {
      navigate('/success');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <>
     

      <div className="payment" style={{ marginTop:"20px"}}>
        <Stripe
          name={"$ "+totalAmount +" Donation"}
          description="For Neville Alumni Association"
          panelLabel="Donate Now"
          ComponentClass="edit"
          billingAddress={true}
          image="https://www.nevillealumni.org/sites/default/files/nafa_logo_108x114_1.png"
          stripeKey="pk_test_51KTBqNJCsBkQnwT7z2KEfRRafm2mIQWSL2tuekmlD6kpHznIPsFXBbz5iooy4AajyO9LdYdvO7LLg0ICACezlX2G00mL9R7QwH"
          token={handleToken}
        />
      </div>
    </>
  );
}
export default Payment;