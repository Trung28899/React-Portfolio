import React from "react";
import classes from "../../../../views/index-sections/SectionCarousel/SectionCarousel.module.css";
import { Button } from "reactstrap";

function ProjectCard(props) {
  const projectName = ["h6", classes.projectName];
  const technologyText = [classes.techText];
  const openModal = () => {
    props.openModal();
    props.setInfo();
  };
  return (
    <div>
      <div className={classes.item}>
        <img
          alt="..."
          className={["img-thumbnail img-responsive", classes.cardImg].join(
            " "
          )}
          src={props.info.images[0]}
        />
        <div className={classes.togglePortion}>
          <p className={projectName.join(" ")}>{props.info.projectName}</p>
          <p className={technologyText.join(" ")}>{props.info.technology}</p>
          <Button
            color="info"
            className={classes.buttonStyle}
            onClick={openModal}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
