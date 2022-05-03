import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";




const DisplayEvents = ({event, display}) => {
  const [show, setShow] = useState(false);
  const [initialCall, setInitialCall] = useState<number>(0);

 
  
  const handleClose = () => setShow(false);
  
  
  useEffect(() => {
      if(initialCall === 0){
        setInitialCall(1);
        setShow(false);
          
      } else {
        setShow(true);
      }
    
  }, [display]);
  


    return (
        <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{event?.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {event?.date}
        </Modal.Body>
        <Modal.Footer>
            Link 
        </Modal.Footer>
        </Modal>
        </>
      );
}


export default DisplayEvents;