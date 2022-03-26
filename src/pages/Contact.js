import React, { Fragment } from "react";
import classes from "./Contact.module.css";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";

const Contact = () => {
  return (
    <Fragment>
      <Header sticky={true} />
      <div className={classes.main}>
        <h2 className={classes.info}>
          You can explore code of this page on
          <a
            href="https://github.com/MahirPrcanovic/yts.mx-clone"
            target="_blank"
            rel="noreferrer"
            className={classes.here}
          >
            here
          </a>
          .
        </h2>
        <h2>
          <a
            href="https://www.linkedin.com/in/mahir-prcanovi%C4%87/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            LinkedIn
          </a>
        </h2>
        <h2>
          <a
            href="https://github.com/MahirPrcanovic"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Github
          </a>
        </h2>
        <h2>Email: mahirprcanovic@gmail.com</h2>
        <h3>
          Note: This page is clone of{" "}
          <a
            href="https://yts.mx/"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            this
          </a>{" "}
          page and all credit belongs to them.
        </h3>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
