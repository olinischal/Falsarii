import { useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";
import 'bootstrap/dist/css/bootstrap.css';
import { CSSProperties } from "react";
import navbar from "../navbar";

const ScholarshipPage  = () => {

    const [scholarship, setScholarship] = useState<ScholarshipData>({
        scholarshipName: " ",
        description: " ",
        deadline: "",
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
                        <div className="small text-muted">Date of last years winner</div>
                        <h2 className="card-title">Scholarship Name</h2>
                        <p className="card-text">Description of the scholarship goes here</p>
                        <a className="btn btn-primary" href="#!">Donate</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="small text-muted">January 1, 2022</div>
                                <h2 className="card-title h4">Contributors</h2>
                                <p className="card-text">List of people who have donated to the scholarship</p>
                                <a className="btn btn-primary" href="#!">Donate</a>
                            </div>
                        </div>
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