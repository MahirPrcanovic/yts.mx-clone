import Header from "../components/Global/Header";
import { Fragment } from "react";
import SearchBar from "../components/BrowseMoivesPage/SearchBar";

const BrowseMovies = () => {
  return (
    <Fragment>
      <Header stick={true} />
      <SearchBar />
    </Fragment>
  );
};
export default BrowseMovies;
