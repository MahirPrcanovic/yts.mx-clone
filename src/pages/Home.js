import { Fragment } from "react";
import Header from "../components/HomePage/Header";
import Main from "../components/HomePage/Main";
import Upcoming from "../components/HomePage/Upcoming";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Upcoming />
    </Fragment>
  );
};
export default Home;
