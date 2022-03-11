import React from "react";
import { Fragment } from "react";
import classes from "./DownloadOverlay.module.css";
import ReactDom from "react-dom";
const DownloadOverlay = (props) => {
  console.log(props.data);
  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={props.close}></div>
      <div className={classes.modal}>
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
        <div className={classes.container}></div>
        <div className={classes.container2}>
          {props.data && props.data.data.movie.torrents
            ? props.data.data.movie.torrents.map((torrent) => {
                return (
                  <div className={classes.inside}>
                    <div
                      className={classes.icon}
                      style={
                        {
                          // backgroundImage: `url(../../images/720p.png)`,
                        }
                      }
                    >
                      SLIKA
                    </div>
                    <div>WEB</div>
                    <div>File Size</div>
                    <div>962</div>
                    <button></button>
                    <div>Magnet</div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default DownloadOverlay;
