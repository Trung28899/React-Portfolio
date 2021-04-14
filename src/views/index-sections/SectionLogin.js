import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

import classes from "./SectionLogin/SectionLogin.module.css";

function SectionLogin() {
  const contactButtonsHandler = (contact) => {
    switch (contact) {
      case "email":
        console.log("got in email");
        window.open("mailto:trevtrinh@gmail.com");
        break;
      case "address":
        return window.open(
          "https://www.google.com/maps/place/10+Navy+Wharf+Ct,+Toronto,+ON+M5V+3V2/@43.6404402,-79.3940475,17z/data=!4m5!3m4!1s0x882b3527ff32a295:0xe28fa1200a8a7cb7!8m2!3d43.6404402!4d-79.3918535"
        );
      case "phone":
        window.location.href = "tel:+1 416-518-4556";
        break;
      case "linkedin":
        return window.open(
          "https://www.linkedin.com/in/trevor-trinh-trung-trinh-901a98150/"
        );

      default:
    }
  };

  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2FProjects%20Image%2Flogin-image.jpg?alt=media&token=4608418e-15f1-482e-ad46-3c6cbce1e758")`,
        }}
        id="contact"
      >
        <Container>
          <div className={classes.contactCard}>
            <h3 className="title mx-auto">My Contacts</h3>

            <div className={classes.contactCardGrid}>
              <Card style={{ width: "100%" }} className="text-center">
                <CardBody>
                  <CardTitle>Email</CardTitle>
                  <CardText className={classes.cardText}>
                    TrevTrinh@gmail.com
                  </CardText>
                  <Button
                    block
                    className="btn-round"
                    type="button"
                    color="danger"
                    onClick={() => contactButtonsHandler("email")}
                  >
                    Email Me
                  </Button>
                </CardBody>
              </Card>

              <Card style={{ width: "100%" }} className="text-center">
                <CardBody>
                  <CardTitle>Phone Number</CardTitle>
                  <CardText className={classes.cardText}>
                    +1 416-518-4556
                  </CardText>
                  <Button
                    block
                    className="btn-round"
                    type="button"
                    color="success"
                    onClick={() => contactButtonsHandler("phone")}
                  >
                    Call / Text Me
                  </Button>
                </CardBody>
              </Card>

              <Card style={{ width: "100%" }} className="text-center">
                <CardBody>
                  <CardTitle>My Location</CardTitle>
                  <CardText className={classes.cardText}>
                    10 Navy Wharf Court, Toronto, ON
                  </CardText>
                  <Button
                    block
                    className="btn-round"
                    type="button"
                    onClick={() => contactButtonsHandler("address")}
                  >
                    Get My Location
                  </Button>
                </CardBody>
              </Card>

              <Card style={{ width: "100%" }} className="text-center">
                <CardBody>
                  <CardTitle>My LinkedIn</CardTitle>
                  <CardText className={classes.cardText}>
                    Trevor Trinh (Trung Trinh)
                  </CardText>
                  <Button
                    block
                    className="btn-round"
                    type="button"
                    color="info"
                    onClick={() => contactButtonsHandler("linkedin")}
                  >
                    Visit My LinkedIn
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col text-center">
            <Button
              className="btn-round"
              outline
              color="neutral"
              href="/register-page"
              size="lg"
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              BACK TO TOP &nbsp;
              <FontAwesomeIcon icon={faArrowUp} />
            </Button>
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
