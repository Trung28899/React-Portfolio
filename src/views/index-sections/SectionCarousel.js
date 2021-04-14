import React, { useState } from "react";
import classes from "./SectionCarousel/SectionCarousel.module.css";
import ProjectCard from "../../components/Trung/UI/ProjectCard/ProjectCard";
import { Container } from "reactstrap";
import { allProjects } from "../../components/Trung/ImageExport/Project-Images";

import Modal from "../../components/Trung/UI/Modal/Modal";
import BackDrop from "../../components/Trung/UI/Backdrop/Backdrop";
// import Loader from "../../components/Trung/UI/Loader/Loader";

function SectionCarousel() {
  const defaultInfo = {
    images: [],
    projectName: "",
    technology: "",
    description: [],
    siteUrl: "",
    githubUrl: "",
    video: [],
  };
  const topClasses = ["blockquote", classes.Title];
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(defaultInfo);
  const keys = [];
  for (let key in allProjects) {
    keys.push(key);
  }

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setInfo(defaultInfo);
  };

  return (
    <div>
      <div className="section pt-o" id="projects">
        <Container>
          <blockquote className={topClasses.join(" ")}>Projects</blockquote>
          <div className={[classes.projectListing, "text-center"].join(" ")}>
            {keys.map((value, index) => (
              <ProjectCard
                info={allProjects[value]}
                key={index}
                openModal={openModal}
                setInfo={() => setInfo(allProjects[value])}
              />
            ))}
          </div>
        </Container>
      </div>{" "}
      <Modal info={info} show={show} closeModal={closeModal} />
      <BackDrop show={show} />
    </div>
  );
}

export default SectionCarousel;
