import React from "react";
import { Link } from "react-router-dom";
import classes from "./ErrorMain.module.css";

const ErrorMain = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>
        Error! Not Found (this page does not exist).
      </h1>
      <h3 className={classes.text}>
        Please{" "}
        <Link to="/login-user" className={classes.link}>
          LOGIN
        </Link>{" "}
        to gain access to all YIFY features
      </h3>
      <h3 className={classes.text}>
        or{" "}
        <Link to="/create-user" className={classes.link}>
          Create a Free Account{" "}
        </Link>{" "}
        to join YTS.MX (it takes few seconds).
      </h3>
    </div>
  );
};

export default ErrorMain;
