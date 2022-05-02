import { Link } from "react-router-dom";
import EventData from "../../types/Event";
import ScholarshipData from "../../types/Scholarship";
import './Events.css'



const EventList = ({event, index}) => {
  let d = new Date(event.date);
  var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];	
let date = d.getDate() + 1;		
let year = d.getFullYear();

    return (
        <>

                <section id="events">
                <div className="column">
                  <Link to={`/e/page/${index}`} >
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
                </Link>
              </div>

                </section>
               


               
    </>
  );
};

export default EventList;
