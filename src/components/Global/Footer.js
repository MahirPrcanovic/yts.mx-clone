import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h3 className={classes.ha3}>
          YTS &copy; 2011-2022 - {""}
          <a
            href="https://yts.mx/blog"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>{" "}
          -{" "}
          <a
            href="https://yts.mx/dmca"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            DMCA
          </a>{" "}
          -{" "}
          <a
            href="https://yts.mx/api"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>{" "}
          -{" "}
          <a
            href="https://yts.mx/rss-guide"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            RSS
          </a>{" "}
          -{" "}
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>{" "}
          -{" "}
          <Link to="/browse-movies" className={classes.link}>
            Browse Movies
          </Link>{" "}
          -{" "}
          <a
            href="https://yts.mx/requests"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            Requests
          </a>{" "}
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
          <a
            href="https://yts.mx/terms"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            User Agreement
          </a>
          , which can be read{" "}
          <a
            href="https://yts.mx/terms"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </h3>
      </div>
    </div>
  );
};
export default Footer;
