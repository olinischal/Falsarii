import "./contact.css";

const Contact = () => {
  return (
    <>
      <h1 className="Title">Contact Us</h1>
      <div className="container">
        <form action="action_page.php">
          <label> First Name</label>
          <br></br>
          <input
            type="text"
            id="fname"
            name="FirstName"
            placeholder="Your name.. "
          ></input>
          <br></br>
          <label>Last Name</label>
          <br></br>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          ></input>
          <br></br>
          <label>Enter your email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email..."
          ></input>
          <br></br>
          <label>Your message</label>
          <br></br>
          <textarea
            id="subject"
            name="subject"
            placeholder="Your message here..."
          ></textarea>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};

export default Contact;
