import React, { Fragment } from "react";
import classes from "./Register-LoginOverlay.module.css";
import ReactDom from "react-dom";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";
const RegisterOverlay = (props) => {
  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={props.close}></div>
      <div className={classes.module}>
        <Login />
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default RegisterOverlay;
