import React from "react";
import { Fragment } from "react";
import classes from "./OverlayMovies.module.css";
import ReactDom from "react-dom";
const OverlayMovies = (props) => {
  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={props.close}></div>
      <div className={classes.aa}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.button}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={props.close}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div
          className={classes.modal}
          style={{
            backgroundImage: props.picture ? `url(${props.picture})` : "",
            backgroundPosition: "centre",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {props.video !== " " && props.video ? (
            <iframe
              src={props.video}
              title="YouTube video player"
              frameborder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allow="fullscreen"
              className={classes.video}
            ></iframe>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default OverlayMovies;
