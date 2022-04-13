import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

  
    <Container fluid = "md">
      <Row>
        <Col>Picture goes here</Col>
      </Row>
      <Row>
      <Col>Discription here</Col>
      </Row>
    </Container>



    
    
    );
}

export default ScholarshipPage;