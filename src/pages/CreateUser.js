import React, { Fragment } from "react";
import CreateUserMain from "../components/CreateUser/CreateUserMain";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
const CreateUser = () => {
  return (
    <Fragment>
      <Header sticky={true} />
      <CreateUserMain />
      <Footer />
    </Fragment>
  );
};

export default CreateUser;
