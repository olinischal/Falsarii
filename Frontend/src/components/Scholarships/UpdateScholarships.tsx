import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Authenticate from "../../Context/Authenticate";
import { ScholarshipRequests } from "../../services/api";
import ScholarshipData from "../../types/Scholarship";
import ScholarshipList from "./ScholarshipList";
import ScholarshipPage from "./ScholarshipPage";

const UpdateScholarships = () => {
  const [scholarship, setScholarship] = useState<ScholarshipData[]>([]);
  

  useEffect(() => {
    ScholarshipRequests.getScholarships()
      .then((response) => {
        setScholarship([...response]);
        
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">Scholarships</h2>
              </div>
            </div>
          </div>

          <div className="row gx-5">
            {scholarship.map((val, key) => {
              
              return (
                <ScholarshipList scholarship = {val} key={key} />
                
               
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateScholarships;
