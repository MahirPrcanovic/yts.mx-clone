import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h3 className={classes.ha3}>
          YTS &copy; 2011-2022 - {""}
          <Link to="/blog" className={classes.link}>
            Blog
          </Link>{" "}
          -{" "}
          <Link to="/dmca" className={classes.link}>
            DMCA
          </Link>{" "}
          -{" "}
          <Link to="/api" className={classes.link}>
            API
          </Link>{" "}
          -{" "}
          <Link to="/rss-guide" className={classes.link}>
            RSS
          </Link>{" "}
          -{" "}
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>{" "}
          -{" "}
          <Link to="/browse-movies" className={classes.link}>
            Browse Movies
          </Link>{" "}
          -{" "}
          <Link to="/requests" className={classes.link}>
            Requests
          </Link>{" "}
          -{" "}
          <Link to="/login-user" className={classes.link}>
            Login
          </Link>
        </h3>
      </div>
      <div className={classes.row}>
        <a
          href="https://eztv.re"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          EZTV
        </a>{" "}
        -
        <a
          href="https://yifystatus.com"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          YIFY Status
        </a>{" "}
        -
        <a
          href="https://ytsproxies.com"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          YTS Proxies
        </a>
      </div>
      <div className={classes.row}>
        <h3 className={classes.ha3}>
          By using this site you agree to and accept our{" "}
          <Link to="/terms" className={classes.link}>
            User Agreement
          </Link>
          , which can be read{" "}
          <Link to="/terms" className={classes.link}>
            here
          </Link>
          .
        </h3>
      </div>
    </div>
  );
};
export default Footer;
