import React, { Component } from "react";
import classes from "./Modal.module.css";
import { Button } from "reactstrap";

import { UncontrolledCarousel } from "reactstrap";

import arrowSVG from "../../../../assets/projectsImg/arrow.svg";
import githubSVG from "../../../../assets/projectsImg/github.svg";

class Modal extends Component {
  state = {
    accountType: null,
    url: null,
  };

  handleClickGitHub = () => {
    window.open(this.props.info.githubUrl);
  };

  handleClickViewSite = () => {
    window.open(this.props.info.siteUrl);
  };

  render() {
    const cssClasses = [
      classes.Modal,
      this.props.show ? classes.ModalOpen : classes.ModalClosed,
    ];

    const imagesArray = this.props.info.images;
    const carouselItems = [];

    imagesArray.map((image, index) => {
      carouselItems.push({
        src: image,
        altText: "Slide " + index,
        caption: "",
        key: index,
      });
      return 1;
    });

    return (
      <div className={cssClasses.join(" ")}>
        <UncontrolledCarousel
          items={carouselItems}
          className={classes.carousel}
        />
        <div>
          <h3 className={classes.projectTitle}>
            {this.props.info.projectName}
          </h3>
          <blockquote className="blockquote">
            <p className={classes.projectTechnology + " mb-2 mt-2"}>
              {this.props.info.technology}
            </p>
          </blockquote>
          <p className={classes.projectDesc}>{this.props.info.description}</p>
        </div>

        <p className={classes.closeButton} onClick={this.props.closeModal}>
          x
        </p>

        <div className="mt-3">
          <Button
            className="mr-1 ml-1"
            color="danger"
            onClick={this.handleClickViewSite}
          >
            <img alt="view icon" className={classes.icon} src={arrowSVG} />
            View Site
          </Button>
          <Button
            className="mr-1 ml-1"
            color="primary"
            onClick={this.handleClickGitHub}
          >
            <img alt="github icon" src={githubSVG} className={classes.icon} />
            Github
          </Button>
        </div>
      </div>
    );
  }
}

export default Modal;

/** 
 * <button
          type="button"
          className={classes.Button}
          onClick={this.handleClick}
        >
        {this.props.buttonName}
        </button>
*/
