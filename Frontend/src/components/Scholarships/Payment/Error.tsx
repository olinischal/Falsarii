import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>Some Error Occured<br/>
        1.Amount must be at least $0.5<br/>
        2.Enter numeric character only
        <Link to="/payment">Click to go back</Link>
    </div>
    
  )
}

export default Error;