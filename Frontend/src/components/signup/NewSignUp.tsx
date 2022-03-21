import Signup from ".";
import "./NewSignUp.css";
function NewSignUp() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 my-auto logo-edit">
          {/* <img className="img-fluid logo" src={require("./NAFA_Logo.PNG")} alt=""/> */}
          <p style={{color:'black', fontSize:'18px'}}>
            <ul style={{listStyleType:'none'}}>
              <li style={{fontSize:'25px'}}><b>Register Your New NAFA Account</b></li>
              <li>Fill out the User Registration form to create your account.</li>
              <li>Enter valid phone and email address.</li>
              <li>You should see remainder of account creation on successfully registering.</li>
            </ul>
          </p>
        </div>
        <div className="col-md-4 formSignUp">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default NewSignUp;
