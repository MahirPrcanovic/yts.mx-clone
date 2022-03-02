import classes from "./MovieDetail.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const MovieDetail = (props) => {
  const history = useHistory();
  const [showOverlay, setShowOverlay] = useState(false);
  const addClassHandler = () => {
    setShowOverlay(true);
  };
  const removeClassHandler = () => {
    setShowOverlay(false);
  };
  return (
    <div className={classes.main}>
      <div
        className={`${classes.movie}`}
        onClick={() => {
          history.push("/movie/id");
        }}
      >
        <div
          onMouseOver={addClassHandler}
          onMouseOut={removeClassHandler}
          className={`${classes.block} ${
            props.small === true ? classes.small : ""
          }`}
          style={{
            backgroundImage: `url("${props.image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: `${!showOverlay ? "" : "brightness(35%)"}`,
          }}
        ></div>
        <div
          className={`${classes.try}`}
          onMouseOver={addClassHandler}
          onMouseOut={removeClassHandler}
          style={{
            border: `${!showOverlay ? "" : "4px solid rgb(118, 235, 118)"}`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.icon} ${showOverlay ? "" : classes.hidden}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <h1
            className={`${classes.item} ${showOverlay ? "" : classes.hidden}`}
          >
            {props.rating} / 10
          </h1>
          <h1
            className={`${classes.item} ${classes.genre} ${
              showOverlay ? "" : classes.hidden
            }`}
          >
            {props.genre ? props.genre[0] : " "}
          </h1>
          <h1
            className={`${classes.item} ${showOverlay ? "" : classes.hidden}`}
          >
            {props.genre ? props.genre[1] : " "}
          </h1>
          <button
            className={`${classes.button} ${showOverlay ? "" : classes.hidden}`}
          >
            View Details
          </button>
        </div>
      </div>
      <Link to="/movies/id" className={classes.title}>
        {props.title}
      </Link>
      <p className={classes.year}>{props.year}</p>
    </div>
  );
};
export default MovieDetail;
