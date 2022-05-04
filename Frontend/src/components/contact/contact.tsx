import "./contact.css";
import { sendEmail } from "../../services/authenticate-service";
import { useState } from "react";

const Contact = () => {
  const [need, setNeed] = useState("Others");
  const email: string[] = ["rameshchapagain1043@gmail.com"];
  const [description, setDescription] = useState("This is new description");

  function handleClose() {
    const desc =
      "Sender is: " +
      localStorage.getItem("userEmail") +
      "        \n " +
      description;
    console.log(need);
    console.log(desc);
    console.log(email);
    try {
      sendEmail(need, desc, email).then(() => {
        console.log("Email Sent");
      });
    } catch (error) {
      console.log("ERROR");
    }
  }

  return (
    <>
      <section id="contact" className="contact section-padding">
        <div className="container">
          <form id="contact-form" role="form">
            <div className="controls">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header text-center pb-5">
                    <h1>Contact Us</h1>
                    <p style={{ fontSize: "20px" }}>
                      Feel free to reach out to us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="form_name">Firstname *</label>{" "}
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Please enter your firstname *"
                      data-error="Firstname is required."
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="form_lastname">Lastname *</label>{" "}
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      className="form-control"
                      placeholder="Please enter your lastname *"
                      data-error="Lastname is required."
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="form_email">Email *</label>{" "}
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Please enter your email *"
                      data-error="Valid email is required."
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="form_need">
                      Please specify your need *
                    </label>{" "}
                    <select
                      id="form_need"
                      name="need"
                      className="form-control"
                      defaultValue="--Select Your Issue--"
                      data-error="Please specify your need."
                      onChange={(e) => setNeed(e.target.value)}
                    >
                      <option value="" disabled>
                        --Select Your Issue--
                      </option>
                      <option> </option>
                      <option>Account creation help</option>
                      <option>Edit profile information help</option>
                      <option>Payment issue</option>
                      <option>New event creation</option>
                      <option>New scholarship creation</option>
                      <option>Other</option>
                    </select>{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="form_message">Message *</label>{" "}
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder="Write your message here."
                      rows={4}
                      data-error="Please, leave us a message."
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>{" "}
                  </div>
                </div>
                <div className="col-md-12">
                  {" "}
                  <input
                    type="submit"
                    className="btn btn-warning pt-2 btn-block "
                    value="Send Message"
                    style={{ marginTop: "12px" }}
                    onClick={() => handleClose()}
                  />{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
