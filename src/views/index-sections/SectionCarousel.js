import React from "react";
import classes from "./SectionCarousel/SectionCarousel.module.css";
import ProjectCard from "../../components/Trung/UI/ProjectCard/ProjectCard";
// reactstrap components
import {
  Container,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

import {
  JSProjects,
  ReactProjects,
  OtherProjects,
} from "../../components/Trung/ImageExport/Project-Images";

function SectionCarousel() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const topClasses = ["blockquote", classes.Title];
  const navTabClasses = ["nav-tabs-navigation", classes.navTabs];

  return (
    <>
      <div className="section pt-o" id="projects">
        <Container>
          <blockquote className={topClasses.join(" ")}>Projects</blockquote>
          <div className={navTabClasses.join(" ")}>
            <div className="nav-tabs-wrapper">
              <Nav id="tabs" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    ALL
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    REACT-JS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    JS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      toggle("4");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    OTHERS
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent activeTab={activeTab} className="text-center">
            <TabPane tabId="1">
              <div className={classes.projectListing}>
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
            </TabPane>
            <TabPane tabId="2">
              <div className={classes.projectListing}>
                <ProjectCard info={ReactProjects.onCard} key="12" />
                <ProjectCard info={ReactProjects.githubFinder} key="10" />
                <ProjectCard info={ReactProjects.githubJob} key="11" />
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div className={classes.projectListing}>
                <ProjectCard info={JSProjects.lyricFinder} key="13" />
                <ProjectCard info={JSProjects.musicPlayer} key="14" />
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className={classes.projectListing}>
                <ProjectCard info={OtherProjects.newRoofing} key="15" />
                <ProjectCard info={OtherProjects.oldPortfolio} key="16" />
                <ProjectCard info={OtherProjects.smartMirror} key="17" />
                <ProjectCard info={OtherProjects.vietCan} key="18" />
              </div>
            </TabPane>
          </TabContent>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
