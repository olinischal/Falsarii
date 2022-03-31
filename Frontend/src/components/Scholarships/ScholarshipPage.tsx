import { useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";



const ScholarshipPage  = () => {

    const [scholarship, setScholarship] = useState<ScholarshipData>({
        scholarshipName: " ",
        description: " ",
        deadline: "",
        status: false,
      });

      let { id } = useParams();


    return (
    <div>
        The name of scholarship is 
        
    </div>);
}

export default ScholarshipPage;