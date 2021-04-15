import React from "react";
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://github.com/Trung28899">GitHub</a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/trevor-trinh-trung-trinh-901a98150/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span
              className="copyright"
              style={{
                fontWeight: "500",
              }}
            >
              © {new Date().getFullYear()}, Made by Trung Trinh{" "}
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
