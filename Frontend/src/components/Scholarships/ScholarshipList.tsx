import { Link } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";

interface scholarshipDetails {
    scholarship: ScholarshipData ;
    key: any;
    
} 

const ScholarshipList: React.FC<scholarshipDetails> = ({scholarship}) => {
    return (
        <>
        
              <div className="col-lg-4 mb-5" key={scholarship.scholarshipId}>
                  <div className="card h-100 shadow border-0">
                    <Link
                      to={`s/page/${scholarship.scholarshipName}`}
                      className="text-decoration-none link-dark stretched-link"
                    >
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/600x350/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="card-body p-4">
                        <h5 className="card-title mb-3">
                          {scholarship.scholarshipName}
                        </h5>

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
