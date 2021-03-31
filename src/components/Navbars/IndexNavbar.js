import React from "react";
import classnames from "classnames";
import classes from "./NavBar.module.css";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Trung's Portfolio
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem className="active">
              <NavLink
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/trevor-trinh-trung-trinh-901a98150/"
                target="_blank"
                title=""
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/Trung28899"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className={classes.viewResumeButton + " btn-round"}
                type="button"
                color="danger"
                onClick={() =>
                  window.open("http://trevortrinh.com/documents/Resume.pdf")
                }
              >
                <FontAwesomeIcon icon={faFileAlt} /> &nbsp; View Resume
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
