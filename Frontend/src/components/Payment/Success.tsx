import React from 'react'

function Success(props) {
  return (
    <div style={{paddingTop:'69px'}}>
       <div className="jumbotron text-center">
  <h1 className="display-3">Thank You For Your Payment!</h1>
  <p className="lead"><strong><b> The payment system is secured by Stripe.</b></strong> <br/>Note that we do not hold any card information. It is solely managed by Stripe Payment System.
  <br/>  <a href="https://stripe.com/docs/security/stripe"> Learn More</a>
  <div>
  {/* Find your receipt for payment here: <a onClick={()=>{window.open(props)}}>Receipt</a> */}
</div>
</p>
  <hr/>
  
  <p>
    Having trouble? <a href="/contact">Contact us</a>
  </p>
  <p className="lead">
    <a className="btn btn-warning btn-sm" href="/" role="button">Continue to homepage</a>
  </p>
</div>

    </div>
  )
}

export default Success;