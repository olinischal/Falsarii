import { useContext, useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Authenticate from "../../Context/Authenticate";


const ScholarshipPage  = () => {
    
    const {scholarshipDetail}: any = useContext(Authenticate);
/*once the information gets submitted for the scholarships delete the added placeholder info*/
    


      
      return(
     <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="card mb-4">
                    <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                    <div className="card-body">
                        <div className="small text-muted"> {scholarshipDetail.deadline} </div>
                        <h2 className="card-title">{scholarshipDetail.scholarshipName}</h2>
                        
                        <a className="btn btn-primary" href="#!">Donate</a>
                    </div>
                </div>
                <p className="card-text">{scholarshipDetail.description}</p>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">Donators list side bar</div>
                    <div className="card-body">List of donators and the amount they have given</div>
                </div>
            </div>
        </div>
    </div>

      )}

export default ScholarshipPage;