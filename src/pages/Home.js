import { Fragment } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};
export default Home;
