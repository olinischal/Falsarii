import "./Add.css";
const AddScholarship = () => {
  return (
    <>
      <div id="addScholarship">
        <form>
          <label className="feedback-title">SCHOLARSHIP INFORMATION</label>{" "}
          <br></br>
          <label className="feedback-subtitle">
            Scholarship Name (Required)
          </label>
          <input name="name" type="text" className="feedback-input" />
          <br></br>
          <label className="feedback-subtitle">Description (Required)</label>
          <textarea name="text" className="feedback-input"></textarea>
          <br></br>
          <label className="feedback-subtitle">Amount (Required)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0.00"
            max="100000.00"
            step="0.1"
            className="feedback-input"
          ></input>
          <br></br>
          <label className="feedback-subtitle">Contact Email (Optional)</label>
          <input name="email" type="text" className="feedback-input" />
          <br></br>
          <label className="feedback-subtitle">Deadline (Required)</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="feedback-input"
          ></input>
          <label className="feedback-subtitle">Renewable (Required)</label>
          <input
            type="checkbox"
            id="renewable"
            name="renew"
            value="Yes"
          ></input>
          <label className="checkbox">Yes</label>
          <br></br>
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  );
};
export default AddScholarship;
