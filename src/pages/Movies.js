import { Fragment } from "react";
import Main from "../components/MoviesPage/Main";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
const Movies = () => {
  return (
    <Fragment>
      <Header stick={true} />
      <Main />
      <Footer />
    </Fragment>
  );
};
export default Movies;
