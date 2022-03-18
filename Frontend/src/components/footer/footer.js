import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="containers">
        <div className="row">
          <div className="col">
            <u>
              <h4>Contact</h4>
            </u>
            <h6 className="list-unstyled">
              <li>Neville High School Alumini Association</li>
              <li>600 Forsythe Avenue</li>
              <li>Monroe, LA, 71201 </li>
              <li>318-387-5700</li>
              <li>nevillealumini@gmail.com</li>
            </h6>
          </div>

          <div className="col">
            <u>
              <h4>Follow us</h4>
            </u>
            <hr />
            <ui className="list-unstyled">
              <div className="Socialwrap">
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
              </div>
            </ui>
          </div>
        </div>
        <hr />

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Neville High School | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
