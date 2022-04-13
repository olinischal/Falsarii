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


    return (id)
}
  
    <container fluid = "md">
      <Row>
        <col>Picture goes here</col>
      </Row>
      <Row>
      <col>Discription here</col>
      </Row>
    </container>



    </div>);
}

export default ScholarshipPage;