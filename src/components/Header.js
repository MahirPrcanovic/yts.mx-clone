// import Logo from "../images/yts-logo.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes.header}>
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
          <Link to="/" className={classes.list}>
            Home
          </Link>
          <Link to="/" className={classes.list}>
            4K
          </Link>
          <Link to="/trending-movies" className={classes.list}>
            Trending
          </Link>
          <Link to="/browse-movies" className={classes.list}>
            Browse Movies
          </Link>
          <a href="#" className={classes.login}>
            Login
          </a>
          <a href="#" className={classes.login}>
            Register
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Header;
