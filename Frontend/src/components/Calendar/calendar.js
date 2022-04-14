import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Children } from "react";
import "./calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    detail: "This is a big meeting",
    allDay: true,
    start: new Date(2022, 4, 25),
    end: new Date(2022, 4, 25),
  },
  {
    title: "Vacation",
    detail: "This is a big meeting",
    start: new Date(2022, 3, 25),
    end: new Date(2022, 3, 25),
  },
  {
    title: "Conference",
    detail: "This is a big meeting",
    start: new Date(2022, 3, 10),
    end: new Date(2022, 3, 10),
  },
];

const CalendarDisplay = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    detail: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };
  const onSelectEvent = (pEvent) => {
    const r = window.confirm("Would you like to remove this event?");
    if (r === true) {
      const initialEvents = allEvents;
      const events = initialEvents.splice(initialEvents.indexOf(pEvent), 1);
      setAllEvents(initialEvents);
    }
  };
  const onClickBox = (pEvent) => {
    setNewEvent({ ...newEvent, start: pEvent.start });
    console.log(pEvent.start);
    // alert(
    <div>
      <input
        type="text"
        placeholder="Add Title"
        style={{ width: "20%", marginRight: "10px" }}
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Add Detail"
        style={{ width: "20%", marginRight: "10px" }}
        value={newEvent.detail}
        onChange={(e) => setNewEvent({ ...newEvent, detail: e.target.value })}
      />
      <DatePicker
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      {/* <DatePicker placeholderText="End Date" 
          selected={newEvent.end} onChange={(end)=> setNewEvent({...newEvent, end})}
          /> */}
      <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
        Add Event
      </button>
    </div>;
    // )
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <h1 style={{ paddingLeft: "50px" }}> Calendar</h1>
      <h2 style={{ paddingLeft: "50px" }}>Add New Events</h2>
      <div style={{ paddingLeft: "50px" }}>
        <input
          type="text"
          placeholder="Add Title"
          style={{
            width: "20%",
            marginRight: "10px",
            border: "none",
            height: "50px",
            fontSize: "25px",
          }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Add Detail"
          style={{
            width: "20%",
            marginRight: "10px",
            border: "none",
            height: "50px",
            fontSize: "25px",
          }}
          value={newEvent.detail}
          onChange={(e) => setNewEvent({ ...newEvent, detail: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px", height: "500px", fontSize: "25px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        {/* <DatePicker placeholderText="End Date" 
          selected={newEvent.end} onChange={(end)=> setNewEvent({...newEvent, end})}
          /> */}
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <div style={{ border: "solid", margin: "50px" }}>
        <Calendar
          views={["month"]}
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="start"
          style={{ height: 500, margin: "50px" }}
          onSelectEvent={(event) => onSelectEvent(event)} //Fires selecting existing event
          onSelectSlot={(event) => onClickBox(event)}
          // onSelectSlot={console.log("Slot slectd")}
          selectable={true}
          // longPressThreshold={10}
          eventPropGetter={(event, start, end, isSelected) => ({
            event,
            start,
            end,
            isSelected,
            style: { backgroundColor: "#ffc40c", color: "#353839" },
          })}
        />
      </div>
    </div>
  );
};

export default CalendarDisplay;
