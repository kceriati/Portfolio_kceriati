import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import bang_make from "../../Assets/Projects/bang_make.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import space_dim_portfolio from "../../Assets/Projects/space_dim_portfolio.JPG";
import pp_image_portfolio_final from "../../Assets/Projects/pp_image_portfolio_final.png";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

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
              imgPath={pp_image_portfolio_final}
              isBlog={false}
              title="Path Partout"
              description="PathPartout is a mobile application designed to make Annecy's inhabitants want to discover new areas and hiking trails around the city, by proposing them appropriate paths according to a given level and criteria.
              I mainly worked on the front end side of the app, by designing many aspect of most of the features delivered by the app. For instance, I implemented an avatar customization system, so the users can explore, unlock and
              appreciate a lot a customization options."
              link="https://github.com/kceriati/PathPartout_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bang_make}
              isBlog={false}
              title="Banger Maker"
              description="Attention to music lovers! With this web platform, you are allowed to compose and edit music directly from the browser. Have fun recreating melodies or let your inspiration flow. This application is developed in PHP with the Symfony framework and the keyboard in Javascript."
              link="https://banger-maker.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space_dim_portfolio}
              isBlog={false}
              title="Space DIM"
              description="SpaceTeam is a team game in which 2 to 8 players will have to cooperate each on your device (smartphone or Android tablet) to save your ship and your crew.
              You will be in charge of a random control panel, with switches, buttons and sliders. Your goal is to follow instructions within a time constraint.
              Good luck, and don't forget to work as a team... Like astronauts!"
              link="https://github.com/kceriati/SpaceDim_PathPartout"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
