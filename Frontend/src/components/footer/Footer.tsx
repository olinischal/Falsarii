import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="">
        <footer className="footer">
          <div className="footer-left col-md-4 col-sm-6">
            <p className="about">
              <h5>
                <b>Mission Statement.</b>
              </h5>
              It is the mission of NAFA to provide supplemental funding for
              programs or projects to enhance the quality of instructional
              delivery and student life, and to promote excellence in higher
              education at NHS. If you have any information or event that needs
              to be featured on this site, please contact Dana Jefferson, NAFA
              Executive Director.
            </p>

            <div className="icons">
              <a
                href="https://www.facebook.com/Neville-Alumni-and-Friends-Association-310455590523"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="facebook-logo"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="insta-logo"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="twitter-logo"
                  src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin-logo"
                  src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"
                />
              </a>
            </div>
          </div>

          <div className="footer-center col-md-4 col-sm-6">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span> 600 Forsythe Ave</span> Monroe, Louisiana
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p>(318) 387 5700</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="#"> office@company.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right col-md-4 col-sm-6">
            <img
              src={require("../../components/navbar/NAFA_Logo.PNG")}
              alt="Logo"
              height="60"
            />
            <p className="menu">
              <a href="#"> Privacy Policy</a> |<a href="#"> News</a> |
              <a href="#"> Contact</a>
            </p>
            <p className="name">
              {" "}
              Neville Alumni & Friends Assocaition &copy; 1980
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
