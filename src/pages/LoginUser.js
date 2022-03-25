import React, { Fragment } from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import LoginUserMain from "../components/CreateUser/LoginUserMain";
const LoginUser = () => {
  return (
    <Fragment>
      <Header />
      <LoginUserMain />
      <Footer />
    </Fragment>
  );
};

export default LoginUser;
