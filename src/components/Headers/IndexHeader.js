import React from "react";
import classes from "./IndexHeader/IndexHeader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import fog from "../../assets/img/fog-low.png";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components

function IndexHeader() {
  const textClass = ["text-center", classes.textColor];
  const landingTextStyle = ["presentation-title", classes.landingText];
  return (
    <>
      <div
        className="page-header section-dark"
        id="home"
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Fheader.jpg?alt=media&token=72ce5c9c-97ba-4b83-86f7-6c306b5aa8d6)",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className={landingTextStyle.join(" ")}>
                Hello, I'm <br /> Trung Trinh
              </h1>
              <div className="fog-low">
                <img alt="Fog 1" src={fog} />
              </div>
              <div className="fog-low right">
                <img alt="Fog2" src={fog} />
              </div>
            </div>
            <h2 className={textClass.join(" ")} color="info">
              I'm a{" "}
              <span style={{ color: "#0275d8", fontWeight: "650" }}>React</span>{" "}
              Front-End Developer
            </h2>
          </Container>
        </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Fclouds.png?alt=media&token=ceef938c-2376-4beb-891d-0a2930774fa4)",
          }}
        />

        <div className={classes.button}>
          <Button
            block
            type="button"
            color="info"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            outline
          >
            View My Work &nbsp;
            <FontAwesomeIcon icon={faArrowDown} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
