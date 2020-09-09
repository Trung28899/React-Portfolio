import React from "react";
// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// plugin that creates slider
// import Slider from "nouislider";
import classes from "./SectionButtons/SectionButtons.module.css";

// reactstrap components
import { Container, Col } from "reactstrap";

function SectionButtons() {
  const topClasses = ["blockquote", classes.Title];
  return (
    <>
      <div
        className={classes.background + " section section-buttons"}
        id="about"
      >
        <Container>
          <blockquote
            style={{ fontWeight: "600" }}
            className={topClasses.join(" ")}
          >
            About Me
          </blockquote>

          <div className={classes.aboutMe}>
            <div className={classes.aboutMeImage}>
              <Col className="mr-auto" md="10" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("../../assets/projectsImg/avatar.jpg")}
                />
                <p className="text-center">Trung Trinh</p>
              </Col>
            </div>
            <div className={classes.aboutMeText}>
              <p>
                I am a software developer enthusiast. After achieved my
                Associate Degree in Computer Engineer, I digged deeper into Web
                Development and gained good efficiency with the MERN stack. I
                have good commands in the following technologies: React-JS,
                Redux, NodeJS, Express-JS, MySQL and MongoDB.
              </p>
              <br />

              <blockquote className="blockquote">
                <h6 className={"mb-2 mt-2"}>Objectives</h6>
              </blockquote>
              <p>
                To obtain a Junior React-JS Developer position where I can
                leverage my Computer Engineer education and technical skills
                gained
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
