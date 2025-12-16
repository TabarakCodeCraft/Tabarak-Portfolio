import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I am a passionate Software Developer with over
              <b className="purple"> 3+ years of professional experience </b>
              in the Iraqi job market, where I have worked with multiple local companies
              delivering real-world production systems.
              <br />
              <br />
              I specialize in building {" "}
              <i>
                <b className="purple">
                  large-scale dashboards, interactive user interfaces,{" "}
                </b>
              </i>
              and business-driven applications based on real client requirements.
              <br />
              <br />
              I am fluent in core technologies such as
              <i>
                <b className="purple"> C++, JavaScript, and TypeScript </b>
              </i>
              and I mainly focus on{" "}
              <i>
                <b className="purple">
                  Full-Stack Web Development, Backend Engineering, and Database Design.
                </b>
              </i>
              <br />
              <br />
              I have strong hands-on experience using
              <b className="purple"> React.js, Next.js </b>
              for frontend development, and
              <b className="purple"> Node.js, Express.js, and Nest.js </b>
              for backend systems.
              <br />
              <br />
              I also work with{" "}
              <i>
                <b className="purple">
                  modern JavaScript libraries, including specialized 3D visualization libraries,{" "}
                </b>
              </i>
              to build immersive and highly interactive user experiences.
              <br />
              <br />
              In addition to full-time roles, I work as a
              <b className="purple"> Freelancer </b>
              where I build{" "}
              <i>
                <b className="purple">
                  medium to large-scale projects from scratch{" "}
                </b>
              </i>
              using
              <b className="purple"> MERN Stack </b>
              or custom Full-Stack architectures based on project needs.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TabarakCodeCraft"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tabarak-ali-star/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tabarak.ali.iq/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
