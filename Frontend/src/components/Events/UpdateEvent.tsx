import { useEffect, useState } from "react";
import EventData from "../../types/Event";
import { EventRequests } from "../../services/api";
import EventList from "./EventList";



const UpdateEvent = () => {
  const [event, setEvent] = useState<EventData[]>([]);

  useEffect(() => {
    EventRequests.getEvents()
      .then((response) => {
        setEvent([...response]); 
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
              <h2 className="fw-bolder">Events</h2>
            </div>
          </div>
        </div>

        <div className="row gx-5">
          {event.map((val, key) => {
            
            return (
              <EventList event = {val} key={key} />
              
             
            );
          })}
        </div>
      </div>
    </section>
  </>
  );
};

export default UpdateEvent;
