import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import books from "../../Assets/Projects/Bookstore.png";
import sofiaa from "../../Assets/Projects/Sofiaa.png";
import spotify from "../../Assets/Projects/spotify.png";
import tictac from "../../Assets/Projects/tictac.png";
import todo from "../../Assets/Projects/todo.png";
// import chatify from "../../Assets/Projects/chatify.png";


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
              imgPath={books}
              isBlog={false}
              title="BookStore"
              description="Bookstore is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to browse, search, and purchase books online. The platform includes user authentication, book listings, cart management, and secure backend APIs for handling data and user actions."
              ghLink="https://github.com/IshikaSinghRajput/Project-BookStore"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sofiaa}
              isBlog={false}
              title="Sofia-AI-Bot"
              description="Sofia Bot is an intelligent conversational chatbot built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides real-time user interaction through a clean and responsive UI, processes user queries on the server, and stores conversation data securely in a database."
              ghLink="https://github.com/IshikaSinghRajput/ChatWiithSofia"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify"
              description="Spotify Clone built using HTML, CSS, and JavaScript that replicates the core user interface and basic functionality of Spotify. The project includes features such as a music player UI, play/pause controls, song list display, progress bar, and dynamic updates using JavaScript."
              ghLink="https://github.com/IshikaSinghRajput/Spotify_Clone"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TicTacToe"
              description="A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript.
              This project demonstrates core front-end concepts such as DOM manipulation, event handling, and basic game logic — all without using any external libraries or frameworks."
              ghLink="https://github.com/IshikaSinghRajput/TicTacToe"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="Todo App is a simple and interactive task management application built using HTML, CSS, and JavaScript. It allows users to add, mark, and delete tasks dynamically, providing real-time updates without page reloads."
              ghLink="https://github.com/IshikaSinghRajput/CBTC/tree/master/ToDoWebsite"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
