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

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  ></link>;

  <link
    href="https://fonts.googleapis.com/css2?family=Yantramanav"
    rel="stylesheet"
  ></link>;
  const newEvent = event.map((val, key) => {
    return {
      key: key,
      title: val.eventName,
      start: val.date,
    };
  });
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
  ></link>;
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
            firstDay={1}
            headerToolbar={{
              right: "prev,next",
              center: "today",
              left: "title",
            }}
            initialView="dayGridMonth"
            plugins={[dayGridPlugin, bootstrap5Plugin]}
            themeSystem="bootstrap5"
            events={newEvent}
            eventClick={eventClick}
          />
        </div>
      </div>

      <DisplayEvents event={selectEvent} display={display} />
    </>
  );
};

export default Calendar;
