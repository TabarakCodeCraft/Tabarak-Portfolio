import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/carlover.png";
import img1 from "../../Assets/mycv.png";
import img2 from "../../Assets/drlap.png";
import suicide from "../../Assets/flowere-commerc.png";
import shopApp from "../../Assets/shopApp.png";
import lastProj from "../../Assets/carSite.png";
import talabatey from "../../Assets/image.png";
import carRental from "../../Assets/carRental.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="DR.Lab"
              description="A desktop application built using React.js and Electron for the Puertik team. The project helped me learn new API structures and how to handle a front-end application with SQLite database integration. You can download the app from the website to assist with laptop diagnostics."
              demoLink="https://www.drlab.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talabatey}
              isBlog={false}
              title="Talabatey Packaging System"
              description="Web application (Dashboard) built using React.js and RESTful APIs for the Talabatey company. Delivered a redesigned frontend for Talabaty Packaging System used by over 5,000 monthly users, focusing on responsive and engaging UI/UX."
              demoLink="https://www.linkedin.com/posts/tabarak-ali-star_im-so-happy-about-my-latest-achievement-activity-7357476830506827777-OMS0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErlMzwB9H1ANRGpX4abAEm-Ya0o8BQxLGc"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carRental}
              isBlog={false}
              title="Car Rental"
              description="Welcome to Car Rental, a modern full-stack web app for renting and managing cars with ease.

Features include:
- Browse and view available cars  
- Create and manage bookings easily  
- Admins can add, edit, or delete cars  
- Multi-language support (English & Arabic)  
- Secure authentication via Clerk  "
              ghLink="https://github.com/TabarakCodeCraft/Car-Rental"
              demoLink="https://car-rental-frontend-by-tabarak2025.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Car Lover"
              description="An online code and markdown editor built with React.js. The editor supports HTML, CSS, and JavaScript, allowing users to see an instant preview of their work. It also provides a markdown editor for README file creation with a toolbar and auto-save feature using Local Storage. The CSS and HTML structure ensures a clean UI with responsive design."
              ghLink="https://github.com/TabarakCodeCraft/Car-lover"
              demoLink="https://car-lover-bytota.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="e-Commerce Flowers"
              description="A fully responsive e-commerce platform for flower shopping, built using HTML and CSS for patients who need easy access to flower orders. It provides a simple and accessible design, ensuring a smooth user experience."
              ghLink="https://github.com/TabarakCodeCraft/E-Commerce-Flowers"
              demoLink="https://design-flowers-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopApp}
              isBlog={false}
              title="Shop Mobile App"
              description="A mobile shopping application built with React.js, designed specifically for mobile users. The app features a user-friendly interface, fast navigation, and optimized performance for a seamless shopping experience."
              ghLink="https://github.com/TabarakCodeCraft/shoppUi"
              demoLink="https://strong-task-by-toto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lastProj}
              isBlog={false}
              title="Rental Car"
              description="A car rental platform built using React.js, designed to assist patients in finding rental cars easily. The platform offers a simple interface with a smooth booking process and responsive layout for accessibility across devices."
              ghLink="https://github.com/TabarakCodeCraft/cars-website-in-react"
              demoLink="https://toto-cars-lover.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
