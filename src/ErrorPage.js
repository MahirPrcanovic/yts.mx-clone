import React from "react";
import Header from "./components/Global/Header";
import Footer from "./components/Global/Footer";
import ErrorMain from "./components/ErrorBoundary/ErrorMain";
const ErrorPage = () => {
  return (
    <Fragment>
      <Header sticky={true} />
      <ErrorMain />
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
