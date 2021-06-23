import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kevin CERIATI </span>
            from <span className="purple"> Annecy, France.</span>
            <br />
            <br />I am a junior Web and Mobile developer.
            <br />
            <br />
            I am 32 years old and after having worked several years as a manager, I did a professional reconversion. 
            <br/>
            <br />
            Having always been passionate about the world of IT and being very curious I realy enjoyed programming.
            Thanks to this job I can cultivate my eager to learn and give life to many different applications 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Some people don't like change, but you need to embrace change if the alternative is disaster."{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
          <br />
          <p style={{ textAlign: "justify" }}>
            Feel free to <span className="purple">Contact </span> Me at:
            <br/>
            <span className="purple">ceriati.kevin1@gmail.com</span>
            <br/>
            <span className="purple">+33 6 38 43 59 11</span>
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
