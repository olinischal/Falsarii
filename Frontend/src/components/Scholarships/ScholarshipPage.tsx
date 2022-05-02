import { useState } from "react";
import { useParams } from "react-router-dom";
import ScholarshipData from "../../types/Scholarship";
import "bootstrap/dist/css/bootstrap.css";


import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Payment from "../Payment/Payment";



const ScholarshipPage = () => {

    const navigate = useNavigate();

  /*once the information gets submitted for the scholarships delete the added placeholder info*/
  const [scholarship, setScholarship] = useState<ScholarshipData>({
    scholarshipName: "Uncle Timmy Memorial Scholarship ",
    description:
      "The description of why Uncle Timmy was the best and how he gave so much to the school goes here Break the writing process up into manageable chunks; this helps you to excel at each stage and plan your time so that you hit your deadline. Follow these 7 stages to achieve optimal results from your writin",
    deadline: "05/20/9999",
    status: false,
  });

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [modalHeading, setModalHeading] = useState("");
const[modalDescription, setModalDescription] = useState("");
const[inputBox, setInputBox] = useState(true);
const[buttonName, setButtonName] = useState("Go to login page");
const[amount,setAmount]= useState(0);

  let { id } = useParams();

function handlePopup(title:string, desc:string){
    if(!localStorage.getItem('user')){
      
            setModalDescription(desc);
            setModalHeading(title);
            setShow(true);
    }
    else{
        handleGift();
    }
}
function handleGift(){
    setShow(true);
    setModalHeading("Donation");
    setModalDescription("Enter the desired amount of donation")
    setInputBox(false);
    setButtonName("Donate");
}

function handleFinal(){
    if(buttonName=="Donate"){
        console.log(buttonName=="Donate");

    }
    else{
        navigate("/login");
    }
}



  return (
    <div
      className="container"
      style={{ paddingTop: "110px", paddingBottom: "100px" }}
    >

        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingBottom:'0px'}}>
            {modalDescription}
        {<input hidden={inputBox} type='text' name="amount" style={{marginLeft:'20px'}} onChange={(e)=>setAmount(parseInt(e.target.value))}/>}
        </Modal.Body>
        <Modal.Footer style={{paddingTop:'0px', marginTop:'0px'}}>
          <Button variant="secondary" onClick={handleClose} style={{marginTop:'45px'}}>
            Close
          </Button>
          {localStorage.getItem('user')? <div > <Payment amount={amount}/> </div>: <Button variant="warning" style={{marginTop:'45px'}} onClick={()=>handleFinal()}>
            {buttonName}
          </Button>}
        </Modal.Footer>
      </Modal>
      <div className="row">
        <div className="col-lg-8">
          <div className="card"  >
            <div>
              <img
                className="card-img-top"
                src="https://architectureassociatesinc.com/wp-content/uploads/2019/03/Neville3.jpg"
                alt="..."
                height="auto"
                width="auto"
                style={{opacity:25, filter: 'blur(2.5px)'}} />
            </div>
       <h2 className="card-title" style={{position:'absolute', top:'70%', left:'10%', color:'white', fontSize:'45px'}}>{scholarship.scholarshipName}</h2>

          </div>
          
          <div className="card" style={{height:'100%'}}>
            <div className="card-body" >
            <div style={{paddingLeft:'85%'}}>
              <a className="btn btn-warning" href="#!" onClick={()=>handlePopup("Please Log in", "You need to be a member to gift in a scholarship")}>
                Make a gift
              </a>
              </div>
              <div className="small text-muted"> {scholarship.deadline} </div>
              <p className="card-text">{scholarship.description}</p>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4" >
            <div className="card-header" style={{backgroundColor:'#ffc40c', color:'#353839'}}>Donators list side bar</div>
            <div className="card-body">
              List of donators and the amount they have given
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
