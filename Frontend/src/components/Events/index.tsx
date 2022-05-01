import { Stack } from "react-bootstrap";

const Events = () => {
  return (
    <>
      {/* <section className="py-5" id="events" style={{paddingTop:'0px', backgroundColor:'red'}}> */}
      <section id="events" style={{ paddingBottom: "0px" }}>
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <p style={{ fontSize: "20px", paddingBottom:'10px', fontWeight:200, paddingTop:'50px' }}>
                  <h2><b>
                  NAFA Events</b></h2>
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <div
                  style={{
                    height: 100,
                    backgroundColor: "#353839",
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "#ffc40c",
                  }}
                >
                  <h2>Class of 2011 Reunion</h2>
                </div>
                <div className="card-body text-center p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    {/* <h5 className="card-title mb-3">Class of 2011 Reunion</h5> */}
                  </a>
                  <p className="card-text mb-0">
                    If you are class of 2014 please attend the Reunion this
                    saturday. You can bring your spouse with you.
                  </p>
                </div>
                <div className="text-center" style={{ marginBottom: "25px" }}>
                  <button className="btn btn-warning btn-sm text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <div
                  style={{
                    height: 100,
                    backgroundColor: "#353839",
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "#ffc40c",
                  }}
                >
                  <h2>Alumni Basketball</h2>
                </div>
                <div
                  className="card-body text-center p-4"
                  //   style={{ backgroundColor: "#161c2d" }}
                >
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    {/* <h5 className="card-title mb-3">
                      Alumni Basketball
                    </h5> */}
                  </a>
                  <p className="card-text mb-0">
                    {" "}
                    {/* <span className="text-warning"> */}
                    This weekend we have alumni basketball tournament. Please
                    click the button below if you are attending the game.
                    {/* </span> */}
                  </p>
                </div>
                <div className="text-center" style={{ marginBottom: "25px" }}>
                  <button className="btn btn-warning btn-sm text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <div
                  style={{
                    height: 100,
                    backgroundColor: "#353839",
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "#ffc40c",
                  }}
                >
                  <h2>Class of 2014 Reunion</h2>
                </div>
                <div className="card-body p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    {/* <h5 className="card-title mb-3">Class of 2014 Reunion</h5> */}
                  </a>
                  <p className="card-text mb-0">
                    If you are class of 2014 please attend the Reunion this
                    saturday. You can bring your spouse with you.
                  </p>
                </div>
                <div className="text-center" style={{ marginBottom: "25px" }}>
                  <button className="btn btn-warning btn-sm text-dark">
                    Learn More
                  </button>
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
