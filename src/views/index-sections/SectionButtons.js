import React, { useEffect } from "react";
import classes from "./SectionButtons/SectionButtons.module.css";
import { Container, Col } from "reactstrap";
import AOS from "aos";

function SectionButtons() {
  const topClasses = ["blockquote", classes.Title];
  const avatar =
    "https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Favatar.jpg?alt=media&token=08f1bd82-670c-47a2-be43-e5acf92605df";

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

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
            <div className={classes.aboutMeImage} data-aos="fade-down">
              <Col className="mr-auto" md="10" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={avatar}
                />
                <p className="text-center">Trung Trinh</p>
              </Col>
            </div>
            <div className={classes.aboutMeText} data-aos="fade-down">
              <p>
                As a{" "}
                <span className={classes.span}>
                  People-oriented Frontend Developer
                </span>
                . I focus on Creating websites that does not confuse users and
                Writing codes that does not upset readers.
              </p>

              <br />
              <p>
                My journey with Software Development started in 2018 while
                finishing my Associate Degree in Computer Engineering.
              </p>
              <br />

              <p>
                3 years into development, I found myself in love with
                actualizing my ideas and amaze people using technologies such
                as: <br />
                <span className={classes.span}>
                  HTML5, CSS3, Javascript, React-JS, Redux, NodeJS, MongoDB,
                  etc.
                </span>
              </p>
              <br />

              <blockquote className="blockquote">
                <h6 className={"mb-2 mt-2"}>Objectives</h6>
              </blockquote>
              <p data-aos="fade-up">
                To Obtain a{" "}
                <span className={classes.span}>
                  {" "}
                  Front End Web Developer position{" "}
                </span>{" "}
                where I can leverage my technical skills gained. Delivering
                flawless and satisfying User Interface / User Experience on
                daily basis
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
