import { Fragment } from "react";
import Header from "../components/Global/Header";
import Main from "../components/TrendingPage/Main";
import Footer from "../components/Global/Footer";
const TrendingMovies = () => {
  return (
    <Fragment>
      <Header stick={true} />
      <Main />
      <Footer />
    </Fragment>
  );
};
export default TrendingMovies;
