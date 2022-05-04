import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Authenticate from "../../Context/Authenticate";
import ScholarshipData from "../../types/Scholarship";



const ScholarshipList = ({ scholarship, index}) => {
  return (
    <>
      <div className="col-lg-4 mb-5"   key={scholarship.scholarshipId}>
        <div className="card h-100 shadow border-0">
          <Link
            to={`/s/page/${index}`}
            className="text-decoration-none link-dark stretched-link"
          >
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/photos/business-girl-holding-graduation-cap-scholarship-picture-id1198172414?s=612x612"
              alt="..."
            />
            <div className="card-body p-4">
              <h5 className="card-title mb-3">{scholarship.scholarshipName}</h5>

              <p className="card-text mb-0">{scholarship.description}</p>
              <p>{scholarship.deadline}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ScholarshipList;
