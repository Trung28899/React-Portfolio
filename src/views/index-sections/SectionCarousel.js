import React from "react";
import classes from "./SectionCarousel/SectionCarousel.module.css";
import ProjectCard from "../../components/Trung/UI/ProjectCard/ProjectCard";
import { Container } from "reactstrap";

import {
  JSProjects,
  ReactProjects,
  OtherProjects,
} from "../../components/Trung/ImageExport/Project-Images";

function SectionCarousel() {
  const topClasses = ["blockquote", classes.Title];

  return (
    <>
      <div className="section pt-o" id="projects">
        <Container>
          <blockquote className={topClasses.join(" ")}>Projects</blockquote>

          <div className={[classes.projectListing, "text-center"].join(" ")}>
            <ProjectCard info={ReactProjects.githubFinder} key="1" />
            <ProjectCard info={ReactProjects.onCard} key="3" />
            <ProjectCard info={ReactProjects.githubJob} key="2" />
            <ProjectCard info={JSProjects.lyricFinder} key="4" />
            <ProjectCard info={OtherProjects.newRoofing} key="6" />
            <ProjectCard info={JSProjects.musicPlayer} key="5" />
            <ProjectCard info={OtherProjects.oldPortfolio} key="7" />
            <ProjectCard info={OtherProjects.smartMirror} key="8" />
            <ProjectCard info={OtherProjects.vietCan} key="9" />
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
