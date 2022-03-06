import { Fragment } from "react";
import Header from "../components/Global/Header";
import Latest from "../components/HomePage/Latest";
import Main from "../components/HomePage/Main";
import Upcoming from "../components/HomePage/Upcoming";
import Footer from "../components/Global/Footer";
const Home = (props) => {
  return (
    <Fragment>
      <Header stick={true} />
      {/* <SearchBar /> */}
      <Main />
      <Latest />
      <Upcoming />
      <Footer />
    </Fragment>
  );
};
export default Home;
