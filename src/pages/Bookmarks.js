import React, { Fragment } from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import BookmarkMain from "../components/Bookmarks/BookmarkMain";
const Bookmarks = () => {
  return (
    <Fragment>
      <Header sticky={true} />
      <BookmarkMain />
      <Footer />
    </Fragment>
  );
};

export default Bookmarks;
