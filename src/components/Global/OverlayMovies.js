import React from "react";
import { Fragment } from "react";
import classes from "./OverlayMovies.module.css";
const OverlayMovies = (props) => {
  return (
    <Fragment>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <button onClick={props.close}>Button</button>
      </div>
    </Fragment>
  );
};

export default OverlayMovies;
