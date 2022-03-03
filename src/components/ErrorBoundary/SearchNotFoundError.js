import React, { Fragment } from "react";
import Header from "../Global/Header";
import classes from "./SearchNotFoundError.module.css";
import { Link } from "react-router-dom";
import Footer from "../Global/Footer";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Fragment>
          <Header stick={true} />
          <div className={classes.main}>
            <div className={classes.error}>
              <h1 className={classes.title}>
                No movies found for this search!
              </h1>
              <Link to="/" className={classes.link}>
                Go Back
              </Link>
            </div>
          </div>
          <Footer />
        </Fragment>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
