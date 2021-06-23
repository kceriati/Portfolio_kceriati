import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/cv_dev_portfolio_final.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR Full Stack Developer [CADS - Annecy le Vieux]"
              date="June 2019 - June 2021"
              content={[
                "Design and development of internal workflows for the various departments of the CA Bank.",
                "Maintenance and evolution of the application park.",
                "Development of mobile application in Android Native for the customers and the employees of the agencies.",
              ]}
            />
            <h3 className="resume-title">Other Activities</h3>
            <Resumecontent
              title="Multi-media development with Flutter 2.0"
              content={[
                "Worked on creating the frontend-end of Path Partout application.",
                "Avatar creator for community hiking application"
              ]}
            />
            <Resumecontent
              title="Web Developer [OIKOS - 2019]"
              content={[
                "I worked on front-end and back-end development of a green commerce application in PHP with the Laravel framework and Javascript",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="LPDIM [IUT-CCI, Annecy (France)] "
              date="2020 - Present"
              content={[`Professional Bachelor’s Degree in multi-platform software development) – Sandwich course`]}
            />
            <Resumecontent
              title="3rd level RNCP degree -  Campus Numérique, Annecy (France)"
              date="2018 - 2020"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="French Baccalaureate S - Berthollet Highschool (Annecy) "
              date="2005 - 2007"
              content={["Precentage: 75%"]}
            />
            <h3 className="resume-title">References</h3>
            <Resumecontent
              title=""
              content={[
                `Thomas Mocellin - Lead developer at CADS`,
                `Contact: thomas.mocellin@gmail.com`,
                "Alexis Boulet - Developer at CADS",
                "Contact: alboulet@orange.fr",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
