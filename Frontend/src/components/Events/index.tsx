import { Stack } from "react-bootstrap";

const Events = () => {
  return (
    <>
      {/* <section className="py-5" id="events" style={{paddingTop:'0px', backgroundColor:'red'}}> */}
      <section id="events" style={{paddingBottom:'0px'}}>
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">NAFA Events</h2>
                <p style={{fontSize:'20px'}}>We organize different events including Alumni Reunion, games, and many more.</p>
              </div>
            </div>
          </div>
          <div className="row gx-5" >
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  height="300px"
                  width="100px"
                  src="https://c.files.bbci.co.uk/22AC/production/_118667880_ka_05_friendsreunion.jpg"
                  alt="..."
                />
                <div className="card-body text-center p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    <h5 className="card-title mb-3">Class of 2011 Reunion</h5>
                  </a>
                  <p className="card-text mb-0">
                    If you are class of 2014 please attend the Reunion this
                    saturday. You can bring your spouse with you.
                  </p>
                </div>
                <div className="text-center" style={{marginBottom:'25px'}}>
                <button className="btn btn-warning btn-sm text-dark">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  height="300px"
                  width="100px"
                  src="https://images.unsplash.com/photo-1522028067194-85ce8814a419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="..."
                />
                <div
                  className="card-body text-center p-4"
                  //   style={{ backgroundColor: "#161c2d" }}
                >
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    <h5 className="card-title mb-3">
                      {/* <span className="text-warning">BASKETBALL</span> */}
                      Alumni Basketball
                    </h5>
                  </a>
                  <p className="card-text mb-0">
                    {" "}
                    {/* <span className="text-warning"> */}
                    This weekend we have alumni basketball tournament. Please
                    click the button below if you are attending the game.
                    {/* </span> */}
                  </p>
                </div>
                <div className="text-center" style={{marginBottom:'25px'}}>
                <button className="btn btn-warning btn-sm text-dark">Learn More</button>
                </div>

              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  height="300px"
                  width="100px"
                  src="https://c.files.bbci.co.uk/22AC/production/_118667880_ka_05_friendsreunion.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    <h5 className="card-title mb-3">Class of 2014 Reunion</h5>
                  </a>
                  <p className="card-text mb-0">
                    If you are class of 2014 please attend the Reunion this
                    saturday. You can bring your spouse with you.
                  </p>
                </div>
                <div className="text-center" style={{marginBottom:'25px'}}>
                <button className="btn btn-warning btn-sm text-dark">Learn More</button>
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
