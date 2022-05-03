import React from "react";

function LogoAndName() {
  return (
    <div>
      <div className="logo">
        <img
          src={require("./NAFA_Logo.PNG")}
          alt="LOGO"
          height="150"
          width="150"
        />
      </div>
      <div className="child name">Naville Alumni {"&"} Friends Association</div>
    </div>
  );
}

export default LogoAndName;
