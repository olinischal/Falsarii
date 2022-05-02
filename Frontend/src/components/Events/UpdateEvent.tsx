import { useContext, useEffect, useState } from "react";
import EventData from "../../types/Event";
import { EventRequests } from "../../services/api";
import EventList from "./EventList";
import Authenticate from "../../Context/Authenticate";



const UpdateEvent = () => {
  const [event, setEvent] = useState<EventData[]>([]);
  const {setEventDetail}: any = useContext(Authenticate);

  useEffect(() => {
    EventRequests.getEvents()
      .then((response) => {
        setEvent([...response]); 
        setEventDetail([...response]);
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);

  return (
    <>
 
    <section id="events" style={{ paddingBottom: "0px" }}>
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">NAFA Events</h2>
                
                <hr style={{ maxWidth: "100%" }}></hr>
                <p style={{ fontSize: "20px" }}>Upcoming Events</p>
              </div>
            </div>
          </div>
          <div className="events-page">
            <div className="rows">
            {event?.map((val, key) => {
            
            if(val.status === false){
              return ;
            }else{
              let index: number = key;
            return (
              <EventList event = {val} key = {key} index={index}/>
              
             
            );
            }
           
            
            // return (
            //   <ScholarshipList scholarship = {val} index={index}/>
              
             
            // );
          })}
        </div>
      </div>



          </div>
    </section>




  </>
  );
};

export default UpdateEvent;
