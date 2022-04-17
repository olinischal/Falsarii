import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { useEffect, useState } from "react";
import EventData from "../../types/Event";
import { EventRequests } from "../../services/api";


const Calendar = () => {

  const [event, setEvent] = useState<EventData[]>([]);
  // const [allEvents, setAllEvents] = useState({
  //   title: "",
  //   date: "",
  //   amount: 0.0
  // });




  useEffect(() => {
    EventRequests.getEvents()
      .then((response) => {
        setEvent([...response]); 
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);

 
  
  // useEffect(() => {
  //   event.map(val => {
  //     return (setAllEvents({...allEvents, title: val.eventName}),
  //     setAllEvents({...allEvents, date: val.date}),
  //     setAllEvents({...allEvents, amount: val.entranceFee})    
    
  //   );

  //   })


  return (
    <>
   <FullCalendar plugins={[dayGridPlugin]} events = {event} />
  </>
  );


};

export default Calendar;
