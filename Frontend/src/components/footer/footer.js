import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
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
          {/* Column2 */}
          <div className="col">
            <u>
              <h4>Follow us</h4>
            </u>
            <hr />
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
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
