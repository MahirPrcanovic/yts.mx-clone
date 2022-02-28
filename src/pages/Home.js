import { Fragment } from "react";
import Header from "../components/HomePage/Header";
import Latest from "../components/HomePage/Latest";
import Main from "../components/HomePage/Main";
import Upcoming from "../components/HomePage/Upcoming";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Latest />
      <Upcoming />
    </Fragment>
  );
};
export default Home;
