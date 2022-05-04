import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayEvents = ({ event, display }) => {
  const [show, setShow] = useState(false);
  const [initialCall, setInitialCall] = useState<number>(0);

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (initialCall === 0) {
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
        <Modal.Body>{event?.date}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default DisplayEvents;
