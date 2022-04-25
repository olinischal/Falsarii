// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import ScholarshipData from "../../types/Scholarship";


 
// const ScholarshipPage  = () => {

//     const [scholarship, setScholarship] = useState<ScholarshipData>({
//         scholarshipName: " ",
//         description: " ",
//         deadline: "",
//         status: false,
//       });


//       let { id } = useParams();


//     return (
//     <div>
//         The name of scholarship is 
        
//     </div>);
// }

// export default ScholarshipPage;


import { useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";
import 'bootstrap/dist/css/bootstrap.css';
import { CSSProperties } from "react";
import navbar from "../navbar";

const ScholarshipPage  = () => {
/*once the information gets submitted for the scholarships delete the added placeholder info*/
    const [scholarship, setScholarship] = useState<ScholarshipData>({
        scholarshipName: "Uncle Timmy Memorial Scholarship ",
        description: "The description of why Uncle Timmy was the best and how he gave so much to the school goes here ",
        deadline: "05/20/9999",
        status: false,
      });


      let { id } = useParams();
      return(
     <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="card mb-4">
                    <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                    <div className="card-body">
                        <div className="small text-muted"> {scholarship.deadline} </div>
                        <h2 className="card-title">{scholarship.scholarshipName}</h2>
                        <p className="card-text">{scholarship.description}</p>
                        <a className="btn btn-primary" href="#!">Donate</a>
                    </div>
                </div>
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