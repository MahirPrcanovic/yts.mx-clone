import { Fragment } from "react";
import Header from "../components/Global/Header";
import Latest from "../components/HomePage/Latest";
import Main from "../components/HomePage/Main";
import Upcoming from "../components/HomePage/Upcoming";
import Footer from "../components/Global/Footer";
import SearchBar from "../components/BrowseMoivesPage/SearchBar";
const Home = (props) => {
  return (
    <Fragment>
      <Header />
      <SearchBar />
      <Main />
      <Latest />
      <Upcoming />
      <Footer />
    </Fragment>
  );
};
export default Home;
