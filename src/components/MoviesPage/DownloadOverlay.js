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
        <div className={classes.container}>Select movie quality</div>
        <div className={classes.container2}>
          {props.data && props.data.data.movie.torrents
            ? props.data.data.movie.torrents.map((torrent, index) => {
                return (
                  <div className={classes.inside}>
                    <div className={classes.icon} style={{}}>
                      {props.data.data.movie.torrents[index].quality}
                    </div>
                    <div>WEB</div>
                    <div>File Size</div>
                    <div>{props.data.data.movie.torrents[index].size}</div>
                    <a
                      className={classes.download}
                      href={`${props.data.data.movie.torrents[index].url}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={classes.downloadIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </a>
                    <a
                      className={classes.magnet}
                      href={`magnet:?xt=urn:btih:${props.data.data.movie.torrents[index].hash}&dn=${props.data.data.movie.title}+%282022%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="192"
                        height="192"
                        fill="rgb(255,0,0)"
                        viewBox="0 0 256 256"
                        className={classes.magnetIcon}
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                          d="M127.3,95a24.1,24.1,0,0,1,33.6-.3c9.7,9.3,9.5,25.1-.1,34.7l-67,64.9a8.1,8.1,0,0,0-.1,11.4l28.7,28.7a8.1,8.1,0,0,0,11.3.1l66.4-65.2c31.2-31.2,32.1-82,1.2-113.4a80,80,0,0,0-113.6-.5L21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
                          fill="none"
                          stroke="rgb(255,0,0)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        ></path>
                        <line
                          x1="126.8"
                          y1="162.4"
                          x2="166.6"
                          y2="202.2"
                          fill="rgb(255,0,0)"
                          stroke="rgb(255,0,0)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        ></line>
                        <line
                          x1="54"
                          y1="89.6"
                          x2="93.7"
                          y2="129.4"
                          fill="rgb(255,0,0)"
                          stroke="rgb(255,0,0)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        ></line>
                      </svg>
                    </a>
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
