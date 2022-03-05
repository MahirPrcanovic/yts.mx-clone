// import Logo from "../images/yts-logo.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import React from "react";
const Header = (props) => {
  return (
    <div
      className={classes.header}
      style={{ position: `${props.stick === true ? "fixed" : "inherit"}` }}
    >
      <div className={classes.logo}>
        <Link className={classes.image} to="./"></Link>
      </div>
      <div className={classes.search}>
        <div className={classes.searchItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.searchIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className={classes.input}
            placeholder="Quick Search"
          />
        </div>
      </div>
      <div className={classes.links}>
        <ul className={classes.list}>
          <Link to="/" className={`${classes.list} ${classes.hidden1}`}>
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Link
            to="/"
            className={`${classes.list} ${classes.hidden} ${classes.fourk}`}
          >
            4K
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <Link to="/" className={`${classes.list} ${classes.hidden1}`}>
            4K
          </Link>
          <Link
            to="/trending-movies"
            className={`${classes.list} ${classes.hidden1}`}
          >
            Trending
          </Link>
          <Link
            to="/browse-movies"
            className={`${classes.list} ${classes.hidden1}`}
          >
            Browse Movies
          </Link>
          <a href="#" className={`${classes.login} ${classes.hidden1}`}>
            Login
          </a>
          <a href="#" className={`${classes.login} ${classes.hidden1}`}>
            Register
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Header;
