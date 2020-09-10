import React, { useState } from "react";
import classes from "../../../../views/index-sections/SectionCarousel/SectionCarousel.module.css";
import { Button } from "reactstrap";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

function ProjectCard(props) {
  const projectName = ["h6", classes.projectName];
  const technologyText = [classes.techText];
  const [modalShow, setModalShow] = useState(false);
  const dummyInfo = {
    images: [],
    projectName: "",
    technology: "",
    description: "",
    siteUrl: "",
    githubUrl: "",
  };

  function showModal() {
    setModalShow(true);
  }

  function closeModalProps() {
    setModalShow(false);
  }

  return (
    <div>
      <div className={classes.item}>
        <img
          alt="..."
          className="img-thumbnail img-responsive"
          src={props.info.images[0]}
        />
        <div className={classes.togglePortion}>
          <p className={projectName.join(" ")}>{props.info.projectName}</p>
          <p className={technologyText.join(" ")}>{props.info.technology}</p>
          <Button
            color="info"
            onClick={showModal}
            className={classes.buttonStyle}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div>
        {
          // true takes 8s to load the whole page
          // modalShow takes 3s to load the whole page, but not able to do animation
          /*
            can try <Modal
              show={modalShow}
              info={modalShow ? props.info : dummyInfo}
              closeModal={closeModalProps}
            />

            const dummyInfo = {
              images: [],
              projectName: "",
              technology: "",
              description: "",
              siteUrl: "",
              githubUrl: "",
            };

            Howevers, this will bring up the issue of loading while using the app

            SOLVED THE PROBLEM OF LAZY LOADING MODAL
          */
          true ? (
            <Modal
              show={modalShow}
              info={modalShow ? props.info : dummyInfo}
              closeModal={closeModalProps}
            />
          ) : null
        }
        <Backdrop show={modalShow} />
      </div>
    </div>
  );
}

export default ProjectCard;
