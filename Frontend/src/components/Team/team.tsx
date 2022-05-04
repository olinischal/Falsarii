import "./team.css";

const Team = () => {
  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h1>Our Team</h1>
              <p style={{ fontSize: "20px" }}>Meet our board members.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="https://cdn.britannica.com/54/128454-050-6442E633/Hillary-Rodham-Clinton-2009.jpg?w=400&h=300&c=crop"
                  alt="Martha Image"
                  className="img-fluid rounded-circle"
                />
                <h3 className="card-title py-2">Martha Steward</h3>
                <p className="card-text">
                  Martha is the President of NAFA organization.
                </p>
                <p className="socials">
                  <i className="fa fa-facebook"></i>
                  <i className="bi bi-twitter text-dark mx-1"></i>
                  <i className="bi bi-facebook text-dark mx-1"></i>
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="https://i.insider.com/623f6483093c4d00180524ef?width=700"
                  alt="Melon Image"
                  className="img-fluid rounded-circle"
                />
                <h3 className="card-title py-2">Melon Husk</h3>
                <p className="card-text">
                  Martha is the Vice-President of NAFA organization.
                </p>
                <p className="socials">
                  <i className="fa fa-facebook"></i>
                  <i className="bi bi-twitter text-dark mx-1"></i>
                  <i className="bi bi-facebook text-dark mx-1"></i>
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/0x0.jpg?format=jpg&width=1200"
                  alt="Heltz Image"
                  className="img-fluid rounded-circle"
                />
                <h3 className="card-title py-2">Heltz Gezoz</h3>
                <p className="card-text">
                  Martha is the Tresurer of NAFA organization.
                </p>
                <p className="socials">
                  <i className="fa fa-facebook"></i>
                  <i className="bi bi-twitter text-dark mx-1"></i>
                  <i className="bi bi-facebook text-dark mx-1"></i>
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="https://www.wired.com/images_blogs/business/2012/04/larrypage.jpg"
                  alt="Berry Image"
                  className="img-fluid rounded-circle"
                />
                <h3 className="card-title py-2">Lage Berry</h3>
                <p className="card-text">
                  Martha is the Secretary of NAFA organization.
                </p>
                <p className="socials">
                  <i className="fa fa-facebook"></i>
                  <i className="bi bi-twitter text-dark mx-1"></i>
                  <i className="bi bi-facebook text-dark mx-1"></i>
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
