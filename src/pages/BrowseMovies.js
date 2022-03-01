import Header from "../components/Global/Header";
import { Fragment } from "react";
import SearchBar from "../components/BrowseMoivesPage/SearchBar";
import Main from "../components/BrowseMoivesPage/Main";

const BrowseMovies = () => {
  return (
    <Fragment>
      <Header stick={true} />
      <SearchBar />
      <Main />
    </Fragment>
  );
};
export default BrowseMovies;
