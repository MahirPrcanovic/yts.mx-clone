import React, { Fragment } from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";
import ErrorMain from "./ErrorMain";
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
          <Header sticky={true} />
          <ErrorMain />
          <Footer />
        </Fragment>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
