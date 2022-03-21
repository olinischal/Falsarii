import "./calendar.css";
const Calendar = () => {
  return (
    <>
      <div className="page_title">
        <p className="title">Calendar</p>
        <p className="subtitle">All the events shown on a calendar</p>
      </div>
      <div className="calendar">
        <div className="fc-left">
          <h2>
            <a href="#" className="previous round">
              &#8249;
            </a>
            March 2022
            <a href="#" className="next round">
              &#8250;
            </a>
          </h2>
        </div>

        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td>
              <div className="content"></div>
            </td>
            <td>
              <div className="content"></div>
            </td>
            <td>
              <div className="content">1</div>
            </td>
            <td>
              {" "}
              <div className="content">2</div>
            </td>
            <td>
              <div className="content">3</div>
            </td>
            <td>
              {" "}
              <div className="content">4</div>
            </td>
            <td>
              <div className="content">5</div>
              <div className="events">
                <p className="eventName">12p oozeball 2022</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="content">6</div>
            </td>
            <td>
              {" "}
              <div className="content">7</div>
            </td>
            <td>
              <div className="content">8</div>
            </td>
            <td>
              {" "}
              <div className="content">9</div>
            </td>
            <td>
              <div className="content">10</div>
            </td>
            <td>
              {" "}
              <div className="content">11</div>
            </td>
            <td>
              <div className="content">12</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="content">13</div>
            </td>
            <td>
              {" "}
              <div className="content">14</div>
            </td>
            <td>
              <div className="content">15</div>
            </td>
            <td>
              {" "}
              <div className="content">16</div>
              <div className="events">
                <p className="eventName">12p oozeball 2022</p>
              </div>
            </td>

            <td>
              <div className="content">17</div>
            </td>
            <td>
              {" "}
              <div className="content">18</div>
            </td>
            <td>
              <div className="content">19</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="content">20</div>
            </td>
            <td>
              {" "}
              <div className="content">21</div>
            </td>
            <td>
              <div className="content">22</div>
            </td>
            <td>
              <div className="content">23</div>
            </td>
            <td>
              {" "}
              <div className="content">24</div>
            </td>
            <td>
              <div className="content">25</div>
            </td>
            <td>
              <div className="content">26</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="content">27</div>
            </td>
            <td>
              {" "}
              <div className="content">28</div>
            </td>
            <td>
              <div className="content">29</div>
            </td>
            <td>
              <div className="content">30</div>
            </td>
            <td>
              {" "}
              <div className="content">31</div>
            </td>
            <td>
              <div className="content"></div>
            </td>
            <td>
              <div className="content"></div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Calendar;