import { useState } from "react";
import { Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import './Image.css';

const ImageList = ({ listView }) => {
  const [selectFile, setSelectFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>([
   "https://neville.mcschools.net/sites/neville/cache/file/063634A1-78AA-4903-AAA9AA82850127C8.jpg", 
   'https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/IMG_7189.JPG?itok=rYXn3Mg8',
   'https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/reunion.jpeg?itok=AxEvaynM ',
   'https://scontent.fatl1-1.fna.fbcdn.net/v/t1.6435-9/60804458_10161784416695524_4371967731675693056_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=j1fB-bgtI6kAX8KnC1Z&tn=Mw-8gcpxlJY3M0PG&_nc_ht=scontent.fatl1-1.fna&oh=00_AT9iGnHaUaz21z2az4VPezXqXzVDwdpLOX1OFeN5rWC5Jw&oe=62955896'
   
  ]
  );

  const photoUpload = (e, id) => {
    e.preventDefault();
    const reader = new FileReader();
    const newImage = [...imagePreview];
    

    reader.onloadend = () => {
      setSelectFile(e.target.files[0]);
      
      newImage[id] = reader.result;
      setImagePreview(newImage);
    };
    reader.readAsDataURL(e.target.files[0]);

    
  };


  return (
    <div>
      {listView ? (
        <div>
          <Container>
            <Row>
              <Col className = "custom-file-upload ">
                <div className = "img-upload">
                <img
                    id ="photo-upload1"
                  className="d-block img img-upload "
                  style={{ width: "25em", height: "25em" }}
                  src={imagePreview[0]}
                  alt="First slide"
                />
                </div>
                <input  type="file" onChange={(e) => photoUpload(e , 0)} />
                <p>
                  <a href="./signup" className="btn btn-warning">
                    Be a member
                  </a>
                </p>
              
              </Col>
              <Col className = "custom-file-upload ">
                <div className = "img-upload">
                <img
                    id ="photo-upload2"
                  className="d-block img img-upload "
                  style={{ width: "25em", height: "25em" }}
                  src={imagePreview[1]}
                  alt="First slide"
                />
                </div>
                <input type="file" onChange={(e) => photoUpload(e , 1)} />
                <p>
                  <a href="./signup" className="btn btn-warning">
                  Donate
                  </a>
                </p>
              
              </Col>
              <Col className = "custom-file-upload ">
                <div className = "img-upload">
                <img
                    id ="photo-upload3"
                  className="d-block img img-upload "
                  style={{ width: "25em", height: "25em" }}
                  src={imagePreview[2]}
                  alt="First slide"
                />
                </div>
                <input  type="file" onChange={(e) => photoUpload(e , 2)} />
                <p>
                  <a href="./signup" className="btn btn-warning">
                  Learn More
                  </a>
                </p>
              
              </Col>
              <Col className = "custom-file-upload ">
              <img
             id ="photo-upload3"
             className="d-block img img-upload "
             style={{ width: "25em", height: "25em" }}
             src={imagePreview[3]}
             alt="First slide"
          />
          <input  type="file" onChange={(e) => photoUpload(e , 3)} />
          
           
            <p>
              <a href="/membershipType" className="btn btn-warning">
                Renew now
              </a>
            </p>
              
              </Col>

            </Row>
          </Container>
        </div>
      ) : (
        <Carousel className="inner" id="home">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagePreview[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Join Our Community</h5>
              <p>
                Join the Alumni Association of Naville High School and be a part
                of our community.
              </p>
              <p>
                <a href="./signup" className="btn btn-outline-warning">
                  Be a member
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagePreview[1]}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h5>Donate For Scholarships</h5>
              <p>Help the students through various scholarships programs.</p>
              <p>
                <a href="#" className="btn btn-outline-warning">
                  Donate
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagePreview[2]}
              alt="Third slide"
            />
            {/* className="d-none d-md-block" */}
            <Carousel.Caption>
              <h5>Learn more about us</h5>
              <p>Know about our events, scholarships, and other information.</p>
              <p>
                <a href="./#about" className="btn btn-outline-warning">
                  Learn More
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagePreview[3]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Already a Member?</h5>
            <p>
              Do not forget to renew your membership.
            </p>
            <p>
              <a href="/membershipType" className="btn btn-outline-warning">
                Renew now
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default ImageList;
