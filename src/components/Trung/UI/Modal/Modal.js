import React from "react";
import classes from "./Modal.module.css";
import { UncontrolledCarousel, Button } from "reactstrap";

const Modal = ({ info, show, closeModal }) => {
  const modalContainer = [
    classes.Modal,
    show ? classes.ModalOpen : classes.ModalClosed,
  ];
  const carouselItems = [];
  const descriptionText = [];

  info.images.map((value, index) =>
    carouselItems.push({
      src: value,
      altText: "Slide " + index,
      caption: "",
      key: index,
    })
  );

  info.description.map((value, index) =>
    descriptionText.push(
      <p className={classes.projectDesc} key={index}>
        {value}
      </p>
    )
  );

  const openLink = (link) => {
    return window.open(link);
  };

  return (
    <div className={modalContainer.join(" ")}>
      {carouselItems.length > 0 && (
        <UncontrolledCarousel
          items={carouselItems}
          className={classes.carousel}
        />
      )}
      <h3 className={classes.projectTitle}>{info.projectName}</h3>
      <blockquote className="blockquote">
        <p className={classes.projectTechnology + " mb-2 mt-2"}>
          {info.technology}
        </p>
      </blockquote>
      <div className={classes.descriptionContainer}>{descriptionText}</div>
      <div className={classes.btnContainer}>
        {info.siteUrl && (
          <Button
            color="danger"
            className={[classes.btnStyle, classes.danger].join(" ")}
            onClick={() => openLink(info.siteUrl || "")}
          >
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i> View Site
          </Button>
        )}
        {info.githubUrl && (
          <Button
            className={[classes.btnStyle, classes.inverse].join(" ")}
            onClick={() => openLink(info.githubUrl || "")}
          >
            <i className="fab fa-github"></i> Source Code
          </Button>
        )}
        {info.video[0] && (
          <Button
            className={[classes.btnStyle, classes.primary].join(" ")}
            onClick={() => openLink(info.video[0] || "")}
          >
            <i className="far fa-eye"></i> App Demo 1
          </Button>
        )}
        {info.video[1] && (
          <Button
            className={[classes.btnStyle, classes.primary].join(" ")}
            onClick={() => openLink(info.video[1] || "")}
          >
            <i className="fas fa-eye"></i> App Demo 2
          </Button>
        )}
        <Button className={classes.btnStyle} onClick={closeModal}>
          <i className="fa fa-times" aria-hidden="true"></i>Dismiss
        </Button>
      </div>
      <div className={classes.closeButton} onClick={closeModal}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Modal;
