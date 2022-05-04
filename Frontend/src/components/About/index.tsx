

const About = () => {

    return (
        <>
      <section id="about" className="about section-padding" style={{paddingBottom:'1px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-img">
              <img
                src={require("./about.jpeg")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>About Naville Alumni Association</h2>
              <p style={{fontSize:'20px'}}>
                It is the mission of NAFA to provide supplemental funding for
                programs or projects to enhance the quality of instructional
                delivery and student life, and to promote excellence in higher
                education at NHS. If you have any information or event that
                needs to be featured on this site, please contact Dana
                Jefferson, NAFA Executive Director.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
        </>
        
    );
}

export default About;