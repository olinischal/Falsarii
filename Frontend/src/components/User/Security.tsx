import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


const Security = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [heading, setHeading] = useState("");
  const[description, setDescription] = useState("");


  function handlePopUp(title:string, desc:string){
      
    setDescription(desc);
    setHeading(title);
    setShow(true);
    
  }

  return (
    <div>
      <Modal className='modal-dialog-centered' show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="card mb-4" style={{ fontSize: "20px", height: "100%" }}>
        <div className="card-header">Change Password</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="small mb-1" placeholder="currentPassword">
                Current Password
              </label>
              <input
                className="form-control"
                id="currentPassword"
                type="password"
                placeholder="Enter current password"
              />
            </div>

            <div className="mb-3">
              <label className="small mb-1" placeholder="newPassword">
                New Password
              </label>
              <input
                className="form-control"
                id="newPassword"
                type="password"
                placeholder="Enter new password"
              />
            </div>

            <div className="mb-3">
              <label className="small mb-1" placeholder="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form-control"
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
            <button className="btn btn-warning" type="button" onClick={()=>handlePopUp("Change Password", "Are you sure you want to change your password?")}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Security;
