import "./StudentFilledForm.css";
const StudentFilledForm = () => {
  return (
    <>
      <div id="StudentFilledForm">
        <form>
          <label className="feedback-title">STUDENT INFORMATION</label>{" "}
          <br></br>
          <label className="feedback-subtitle">Student ID</label>
          <br></br>
          <input name="name" type="text" className="names" disabled /> <br></br>
          <label className="nameTitle">First Name</label>
          <label className="nameTitle">Middle Name</label>
          <label className="nameTitle">Last Name</label>
          <br></br>
          <input name="name" type="text" className="names" />
          <input name="name" type="text" className="names" />
          <input name="name" type="text" className="names" />
          <br></br>
          <label className="nameTitle">Email</label>
          <label className="nameTitle">Phone Number</label>
          <br></br>
          <input name="email" type="text" className="names" />
          <input
            name="phone"
            type="text"
            maxLength={"10"}
            pattern="[1-9]{1}[0-9]{9}"
            className="names"
          />
          <br></br>
          <label className="feedback-subtitle">Date of Birth( Required)</label>
          <input
            style={{ marginLeft: "10.7rem", padding: "5px" }}
            type="date"
            id="deadline"
            name="deadline"
            className="feedback-input"
          ></input>
          <br></br>
          <label className="nameTitle">GPA</label>
          <label className="nameTitle">Current Year</label>
          <br></br>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0.00"
            max="4.00"
            step="0.1"
            className="names"
          ></input>
          <select className="names" name="year">
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>
          <br></br>
          <label className="feedback-subtitle">Address</label>
          <br></br>
          <input name="address" type="text" className="feedback-input" />
          <br></br>
          <label className="feedback-subtitle">Gender</label>
          <br></br>
          <input type="radio" id="renewable" name="renew" value="Yes"></input>
          <label className="checkbox">Male</label>
          <br></br>
          <input type="radio" id="renewable" name="renew" value="Yes"></input>
          <label className="checkbox">Female</label>
          <br></br>
          <input type="radio" id="renewable" name="renew" value="Yes"></input>
          <label className="checkbox">Other</label>
          <br></br>
          <label className="feedback-subtitle">
            Please write an essay describing why you need the Scholarship.
          </label>
          <textarea name="text" className="feedback-input"></textarea>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
export default StudentFilledForm;
