import React, { Fragment } from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import UserMain from "../components/User/UserMain";

const User = () => {
  return (
    <Fragment>
      <Header sticky={true} />
      <UserMain />
      <Footer />
    </Fragment>
  );
};
export default User;
