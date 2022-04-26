import "./Footer.css";

const Footer = () => {

    return (
        <>

<footer className="footer"  >
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
       It is the mission of NAFA to provide supplemental funding for programs or projects to enhance the quality of instructional delivery and student life, and to
promote excellence in higher education at NHS.
If you have any information or event that needs to be featured on this site, please contact Dana Jefferson, NAFA Executive Director.
    </p>
    <div className="icons">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-google-plus"></i></a>
      <a href="#"><i className="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> 600 Forsythe Ave</span> Monroe, Louisiana</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p>(318) 387 5700</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
  <img src={require("../../components/navbar/NAFA_Logo.PNG")} alt="Logo" height="60"/>
    <p className="menu">
     
      
      <a href="#"> Privacy Policy</a> |
      
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p className="name"> Neville Alumni & Friends Assocaition &copy; 1980</p>
  </div>
</footer>


        
        
        
        
        </>
    );
}


export default Footer;