import "./Events.css";

const Events = () => {
  return (
    <>
      {/* <section className="py-5" id="events" style={{paddingTop:'0px', backgroundColor:'red'}}> */}
      <section id="events" style={{ paddingBottom: "0px" }}>
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">NAFA Events</h2>
                <p style={{ fontSize: "40px" }}>Events</p>
                <hr style={{ maxWidth: "100%" }}></hr>
                <p style={{ fontSize: "20px" }}>Upcoming Events</p>
              </div>
            </div>
          </div>

          <div className="events-page">
            <div className="rows">
              <div className="column">
                <div className="event-block">
                  <div className="calendar-block">
                    <p className="day">Friday</p>
                    <p className="date">25</p>
                    <p className="year">
                      <span className="calendar_month">Mar </span>
                      <span>2022</span>
                    </p>
                  </div>
                  <div className="event-details">
                    <p className="event_name">Oozeball 2022</p>
                    <div className="event-details">
                      <p className="event_days">1 day event</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="event-block">
                  <div className="calendar-block">
                    <p className="day">Friday</p>
                    <p className="date">25</p>
                    <p className="year">
                      <span className="calendar_month">Mar </span>
                      <span>2022</span>
                    </p>
                  </div>
                  <div className="event-details">
                    <p className="event_name">Oozeball 2022</p>
                    <div className="event-details">
                      <p className="event_days">1 day event</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="event-block">
                  <div className="calendar-block">
                    <p className="day">Friday</p>
                    <p className="date">25</p>
                    <p className="year">
                      <span className="calendar_month">Mar </span>
                      <span>2022</span>
                    </p>
                  </div>
                  <div className="event-details">
                    <p className="event_name">Oozeball 2022</p>
                    <div className="event-details">
                      <p className="event_days">1 day event</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="event-block">
                  <div className="calendar-block">
                    <p className="day">Friday</p>
                    <p className="date">25</p>
                    <p className="year">
                      <span className="calendar_month">Mar </span>
                      <span>2022</span>
                    </p>
                  </div>
                  <div className="event-details">
                    <p className="event_name">Oozeball 2022</p>
                    <div className="event-details">
                      <p className="event_days">1 day event</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
