import React from 'react'
import Login from '.'
import './NewLogin.css';
function NewLogin() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 my-auto logo-edit">
          {/* <img className="img-fluid logo" src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/reunion.jpeg?itok=AxEvaynM" alt=""/> */}
          <p style={{color:'black', fontSize:'18px'}}>
            <ul style={{listStyleType:'none'}}>
              <li style={{fontSize:'25px'}}><b>Log In To Your NAFA Account</b></li>
              <li>Enter the email and password you used for creating account.</li>
              <li>Click Forgot Password to reset your password.</li>
              <li>If you do not have an account click Sign Up.</li>
              <li>You should see profile on successfully signing in.</li>
            </ul>
          </p>
        </div>
        <div className="col-md-4 formLogin">
          <Login />
        </div>
        
      </div>
    </div>
  )
}

export default NewLogin;