import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container" style={{height:"500px", marginTop:"80px"}}>
    <div className="row " >
        <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 " style={{backgroundColor:"#353839", color:"#ffc40c"}}>
                {/* <div className="card-body bg-light" > */}
                <h1 style={{
                    fontSize: "30px",
                    marginBottom: "25px",
                    fontWeight: "bold",
                    textAlign:'center'
                  }}>Contact Form</h1>
                    <div className="container" >
                        <form id="contact-form" role="form">
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_name">Firstname *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *"  data-error="Firstname is required."/> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *"  data-error="Lastname is required."/> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_email">Email *</label> <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" data-error="Valid email is required."/> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label htmlFor="form_need">Please specify your need *</label> <select id="form_need" name="need" className="form-control"  data-error="Please specify your need.">
                                                <option value="" >--Select Your Issue--</option>
                                                <option>Account creation help</option>
                                                <option>Edit profile information help</option>
                                                <option>Payment issue</option>
                                                <option>New event creation</option>
                                                <option>New scholarship creation</option>
                                                <option>Other</option>
                                            </select> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group"> <label htmlFor="form_message">Message *</label> <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows={4}  data-error="Please, leave us a message."></textarea> </div>
                                    </div>
                                    <div className="col-md-12"> <input type="submit" className="btn btn-warning pt-2 btn-block " value="Send Message" style={{marginTop:"12px"}}/> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </div> 
        </div> 
    </div>
</div>
    </>
  );
};

export default Contact;
