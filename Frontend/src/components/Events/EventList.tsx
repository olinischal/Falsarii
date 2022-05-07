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

                {}

<section id="events">
                <div className="column">

        <div className="card h-100 shadow border-0">
          <Link
            to={`/e/page/${index}`}
            className="text-decoration-none link-dark stretched-link"
          >
            <div className="card-header p-4 " style={{backgroundColor: '#353839', color: '#ffc40c'}}>
            <span className="card-title mb-3 text-warning" style={{fontSize: '30px'}}>{event.eventName}</span>
            
            </div>
            <div className="card-body p-4">
              

              <p className="card-text mb-0"></p>
              <p>{date}</p>
              <p className="year">
                      <span className="calendar_month">{month} </span>
                      <span>{year}</span>
                    </p>
            </div>
          </Link>
        </div>
      </div>

      </section>
               


               
    </>
  );
};

export default EventList;
