import { useState } from "react";
import { Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import './Image.css';

const ImageList = ({ listView }) => {
  const [selectFile, setSelectFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>([
   "https://neville.mcschools.net/sites/neville/cache/file/063634A1-78AA-4903-AAA9AA82850127C8.jpg", 
   'https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/IMG_7189.JPG?itok=rYXn3Mg8',
   'https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/reunion.jpeg?itok=AxEvaynM '
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
//   console.log(imagePreview);

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
                  <a href="./signup" className="btn btn-warning mt-3">
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
                  <a href="./signup" className="btn btn-warning mt-3">
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
                  <a href="./signup" className="btn btn-warning mt-3">
                  Learn More
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
                <a href="./signup" className="btn btn-warning mt-3">
                  Be a member
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/IMG_7189.JPG?itok=rYXn3Mg8"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h5>Donate For Scholarships</h5>
              <p>Help the students through various scholarships programs.</p>
              <p>
                <a href="#" className="btn btn-warning mt-3">
                  Donate
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/reunion.jpeg?itok=AxEvaynM"
              alt="Third slide"
            />
            {/* className="d-none d-md-block" */}
            <Carousel.Caption>
              <h5>Learn more about us</h5>
              <p>Know about our events, scholarships, and other information.</p>
              <p>
                <a href="./#about" className="btn btn-warning mt-3">
                  Learn More
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
