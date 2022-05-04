import FullCalendar from "@fullcalendar/react";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import dayGridPlugin from "@fullcalendar/daygrid";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EventData from "../../types/Event";
import { EventRequests } from "../../services/api";
import DisplayEvents from "./DisplayEvent";
import "./calendar.css";

const Calendar = () => {
  const [event, setEvent] = useState<EventData[]>([]);
  const [display, setDisplay] = useState(true);
  const [selectEvent, setSelectEvent] = useState<EventData>();

  useEffect(() => {
    EventRequests.getEvents()
      .then((response) => {
        setEvent([...response]);
      })
      .catch((error) => {
        console.log("Something went wrong here.", error);
      });
  }, []);

  const newEvent = event.map((val, key) => {
    if (val.status === false) {
      return {};
    }
    return {
      key: key,
      title: val.eventName,
      start: val.date,
    };
  });

  const eventClick = (eventClick) => {
    setDisplay(!display);

    event.forEach((val) => {
      if (val.eventName === eventClick.event.title) {
        setSelectEvent(val);
        console.log(
          val.eventName,
          "is the event Name and ",
          val.date,
          " is the event Date"
        );
      }
    });
  };

  return (
    <>
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            headerToolbar={{
              right: "prev,next",
              center: "today",
              left: "title",
            }}
            firstDay={1}
            initialView="dayGridMonth"
            plugins={[dayGridPlugin, bootstrap5Plugin]}
            themeSystem="bootstrap5"
            events={newEvent}
            eventColor="#378006"
            eventClick={eventClick}
          />
        </div>
      </div>

      <DisplayEvents event={selectEvent} display={display} />
    </>
  );
};

export default Calendar;
