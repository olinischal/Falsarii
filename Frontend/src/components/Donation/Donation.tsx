import { useState } from "react";
import { useNavigate } from "react-router";
import Payment from "../Payment/Payment";

function Donation() {
  const [totalAmount, setTotalAmount] = useState("");
  return (
    <div style={{ paddingTop: "100px", paddingLeft: "100px", height: "500px" }}>
      <div>
        Must be at least $0.5
        <label style={{ position: "relative", left: "15px" }}>$</label>
        <input
          type="text"
          name="amount"
          placeholder=""
          style={{ textIndent: "15px", marginTop: "20px" }}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
        <Payment amount={totalAmount} />
      </div>
    </div>
  );
}
export default Donation;
