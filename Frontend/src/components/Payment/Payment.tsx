import Stripe from "react-stripe-checkout";
import axios from "axios";
import "./Payment.css";
import { useState } from 'react';
import { useNavigate } from "react-router";



function Payment(props) {
  
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState('');

  async function handleToken(token) {
    setTotalAmount(props.amount);
    await axios.post("http://localhost:8080/payment/charge", "", {
      headers: {
        token: token.id,
        // amount: totalAmount,
        amount:props.amount,
      }
      ,
    }).then(() => {
      navigate('/success');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div style={{paddingTop:'50px'}}>
      {/* <div>Must be at least $0.5
        <label style={{position: "relative", left:"15px"}}>$</label>
        <input type="text" name="amount" placeholder="" style={{textIndent:"15px", marginTop:"20px"}}onChange={e => setTotalAmount(e.target.value)} />
      </div> */}

      <div className="payment" style={{ marginTop:"20px"}}>
        <Stripe
          name={"$ "+props.amount +" Payment"}
          description="For Naville Alumni Association"
          panelLabel="Donate Now"
          ComponentClass="edit"
          billingAddress={true}
          image="https://www.nevillealumni.org/sites/default/files/nafa_logo_108x114_1.png"
          stripeKey="pk_test_51KTBqNJCsBkQnwT7z2KEfRRafm2mIQWSL2tuekmlD6kpHznIPsFXBbz5iooy4AajyO9LdYdvO7LLg0ICACezlX2G00mL9R7QwH"
          token={handleToken}
        />
      </div>
    </div>
  );
}
export default Payment;