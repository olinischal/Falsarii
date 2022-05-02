import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Authenticate from "../../Context/Authenticate";
import { ScholarshipRequests } from "../../services/api";
import ScholarshipData from "../../types/Scholarship";
import Success from "./Payment/Success";
import ScholarshipList from "./ScholarshipList";
import ScholarshipPage from "./ScholarshipPage";

const UpdateScholarships = () => {
  const [scholarship, setScholarship] = useState<ScholarshipData[]>([]);
  const {setScholarshipDetail}:any = useContext(Authenticate);
 
  

  useEffect(() => {
    ScholarshipRequests.getScholarships()
      .then((response) => {
        setScholarship([...response]);
        setScholarshipDetail([...response]);
        
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
            {scholarship?.map((val, key) => {
               
              if(val.status === false){
                return ;
              }else{
                let index: number = key;
              return (
                <ScholarshipList scholarship = {val} key = {key} index={index}/>
                
               
              );
              }
             
              
              // return (
              //   <ScholarshipList scholarship = {val} index={index}/>
                
               
              // );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateScholarships;
