import { Button, Carousel, Col, Container, Dropdown, Row, Stack } from "react-bootstrap";
import Events from "../Events";
import Footer from "../footer/Footer";

const Home = () => {

    return(

        <Container fluid id="Top">
            <Row>
                <Col lg={2}>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic" size="lg">
                            Navigation
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#Top">Top of Page</Dropdown.Item>
                            <Dropdown.Item href="#Events">Upcoming Events</Dropdown.Item>
                            <Dropdown.Item href="#News">News</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col lg={8}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/IMG_7189.JPG?itok=rYXn3Mg8"
                            alt="Scholarship Awards"
                            />
                            <Carousel.Caption>
                            <h3>Scholarships</h3>
                            <p>Contribute to scholarships and other opportunities for students.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.nevillealumni.org/sites/default/files/styles/front_page_slider/public/reunion.jpeg?itok=AxEvaynM"
                            alt="Class Reunion"
                            />

                            <Carousel.Caption>
                            <h3>Reunions</h3>
                            <p>Sign up to stay informed about class reunions.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://neville.mcschools.net/sites/neville/cache/file/063634A1-78AA-4903-AAA9AA82850127C8.jpg"
                            alt="Neville High School"
                            />

                            <Carousel.Caption>
                            <h3>Neville High School</h3>
                            <p>Stay connected to Neville High School by joining NAFA!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
            <br></br>
            <Container fluid ="lg" id="Events">
                <Events />
            </Container>
            <Container fluid="lg" id="News">
                <Row>
                    <Col>
                        <br></br><h1>News</h1>
                        <hr></hr>
                        <h2><u>Lorem Ipsum</u></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <br></br>
                        <h2><u>Finibus Bonorum et Malorum</u></h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
                            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container id="Bottom">
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={8}>
                        <img src="https://static.hudl.com/users/temp/2941778_5694186584ac4ce9a08c225f87eb422d.jpg" alt="Neville HS Logo" width="400" />
                        <br></br>
                        <Button variant="warning" href="https://neville.mcschools.net/"><h6>Click here to visit the Neville High School webpage.</h6></Button>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </Container>

    ); 
}

export default Home;




