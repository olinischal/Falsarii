import { Link } from "react-router-dom";
import EventData from "../../types/Event";
import ScholarshipData from "../../types/Scholarship";
import './Events.css'

interface eventDetails {
    event: EventData ;
    key: any;
    
} 

const EventList: React.FC<eventDetails> = ({event}) => {
  let d = new Date(event.date);
  var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];	
let date = d.getDate();		
let year = d.getFullYear();

    return (
        <>

                <section id="events">
                <div className="column">
                <div className="event-block">
                  <div className="calendar-block">
                  <p className="day">{date}</p>
                    
                    <p className="year">
                      <span className="calendar_month">{month} </span>
                      <span>{year}</span>
                    </p>
                  </div>
                  <div className="event-details">
                    <p className="event_name">{event.eventName}</p>
                    <div className="event-details">
                      <p className="event_days">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>

                </section>
               


               
    </>
  );
};

export default EventList;
