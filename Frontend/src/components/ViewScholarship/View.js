import "./View.css";

const ViewScholarship = () => {
  return (
    <>
      <div className="view">
        <div className="page_title">
          <p className="title">Scholarship List</p>
        </div>
        <hr></hr>
        <div className="Upcoming">
          <p className="subtitle">Upcoming Scholarships</p>
        </div>
        <div className="events-page">
          <div className="rows">
            <div className="column">
              <div className="event-block">
                <div className="calendar-block">
                  <p className="deadline"> Deadline</p>
                  <p className="day">Friday</p>
                  <p className="date">25</p>
                  <p className="year">
                    <span className="calendar_month">Mar </span>
                    <span>2022</span>
                  </p>
                </div>
                <div className="event-details">
                  <p className="event_name">
                    Martin Luther King Jr. Scholarship
                  </p>
                  <p className="event_days">
                    This scholarhip is presented to the students who have
                    academic excellence. The students shall demonstrate a
                    leadership capabilities and should be able to communicate
                    effectively.
                  </p>
                  <p style={{ fontWeight: "bold", padding: "1rem" }}>
                    Requirement: 3.0 GPA
                  </p>
                  <a href="/StudentFilledForm">
                    <button className="button">Apply</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="event-block">
                <div className="calendar-block">
                  <p className="deadline"> Deadline</p>
                  <p className="day">Friday</p>
                  <p className="date">25</p>
                  <p className="year">
                    <span className="calendar_month">Mar </span>
                    <span>2022</span>
                  </p>
                </div>
                <div className="event-details">
                  <p className="event_name">Louisiana Leaders</p>
                  <p className="event_days">
                    This scholarhip is presented to a student who show huge
                    prospect in leading student forefront. The student should be
                    an executive memeber of student organization
                  </p>
                  <p style={{ fontWeight: "bold", padding: "1rem" }}>
                    Requirement: 3.0 GPA
                  </p>
                  <a href="/StudentFilledForm">
                    <button className="button">Apply</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="event-block">
                <div className="calendar-block">
                  <p className="deadline"> Deadline</p>
                  <p className="day">Friday</p>
                  <p className="date">25</p>
                  <p className="year">
                    <span className="calendar_month">Mar </span>
                    <span>2022</span>
                  </p>
                </div>
                <div className="event-details">
                  <p className="event_name">BasketBall Scholarship</p>
                  <p className="event_days">
                    This scholarhip is presented by SDfsdfsdfs sdfsdf sdfsdf
                    sdfsdf sdfsd fsd fsf sdf sd
                    fsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfddfjhsdbfhksabfhkjabfakfsdfgjshdfba
                    kaskdfak dfakdfkadfakfaksf
                  </p>
                  <p style={{ fontWeight: "bold", padding: "1rem" }}>
                    Requirement: 3.0 GPA
                  </p>
                  <a href="/StudentFilledForm">
                    <button className="button">Apply</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="event-block">
                <div className="calendar-block">
                  <p className="deadline"> Deadline</p>
                  <p className="day">Friday</p>
                  <p className="date">25</p>
                  <p className="year">
                    <span className="calendar_month">Mar </span>
                    <span>2022</span>
                  </p>
                </div>
                <div className="event-details">
                  <p className="event_name">Soccer 2022</p>
                  <p className="event_days">
                    This scholarhip is presented by SDfsdfsdfs sdfsdf sdfsdf
                    sdfsdf sdfsd fsd fsf sdf sd
                    fsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsdfghjbsmgs
                    vsdsdmnfgsgksgksfgsgsjfg skfjgsgfksgfjksfgsgjshgsk gsjg skg
                  </p>
                  <p style={{ fontWeight: "bold", padding: "1rem" }}>
                    Requirement: 3.0 GPA
                  </p>
                  <a href="/StudentFilledForm">
                    <button className="button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewScholarship;
