import React from "react";
import classes from "./IndexHeader/IndexHeader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
          backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
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
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className={textClass.join(" ")} color="info">
              I'm a{" "}
              <span style={{ color: "#0275d8", fontWeight: "650" }}>
                React-JS
              </span>{" "}
              Web Developer
            </h2>
          </Container>
        </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
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
