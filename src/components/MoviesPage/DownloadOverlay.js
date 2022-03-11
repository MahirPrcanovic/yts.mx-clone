import React from "react";
import { Fragment } from "react";
import classes from "./DownloadOverlay.module.css";
import ReactDom from "react-dom";
const DownloadOverlay = (props) => {
  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={props.close}></div>
      <div className={classes.modal} onClick={props.close}></div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default DownloadOverlay;
