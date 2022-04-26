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
{/*         
              <div className="col-lg-4 mb-5" key={event.eventId}>
                  <div className="card h-100 shadow border-0">
                    <Link
                      to={`s/page/${event.eventName}`}
                      className="text-decoration-none link-dark stretched-link"
                    >
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/600x350/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="card-body p-4">
                        <h5 className="card-title mb-3">
                          {event.eventName}
                        </h5>

                        <p className="card-text mb-0">{event.description}</p>
                        <p>{event.date}</p>
                      </div>
                    </Link>
                  </div>
                </div> */}
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
