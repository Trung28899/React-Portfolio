import React from "react";
import classes from "./Modal.module.css";
import Spinner from "./Spinner";

const Modal = (props) => {
  const cssClasses = [
    classes.Modal,
    props.show ? classes.ModalOpen : classes.ModalClosed,
  ];
  return (
    <div className={cssClasses.join(" ")}>
      <Spinner />
      <h5
        style={{
          position: "relative",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "800",
        }}
      >
        Loading...
      </h5>
    </div>
  );
};

export default Modal;
