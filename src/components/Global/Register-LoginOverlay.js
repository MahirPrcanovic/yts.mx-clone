import React, { Fragment, useState } from "react";
import classes from "./Register-LoginOverlay.module.css";
import ReactDom from "react-dom";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";
const RegisterOverlay = (props) => {
  const [showLogin, setShowLogin] = useState(
    props.trigger === "register" ? false : true
  );
  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={props.close}></div>
      <div className={classes.module}>
        <button
          className={`${classes.button} ${showLogin ? classes.active : ""} `}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className={`${classes.button} ${!showLogin ? classes.active : ""}`}
          onClick={() => setShowLogin(false)}
        >
          Register
        </button>
        {showLogin && <Login />}
        {!showLogin && <Register />}
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default RegisterOverlay;
