import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Github profile Picture.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello World, I’m Ishika Singh Rajput — a passionate developer dedicated towards building creative, efficient, 
              and user-friendly digital solutions. I love turning ideas into reality through clean code, thoughtful design, and modern technology.
              Whether it’s crafting responsive websites, optimizing performance, or bringing new concepts to life, I’m always eager to learn, build, and grow. Welcome to my portfolio!
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, C, JavaScript, React.js, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications,  Performance Optimization,{" "}
                </b>
              </i>
              and exploring new ways to bridge systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Express.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
