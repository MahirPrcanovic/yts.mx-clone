import Header from "../components/Global/Header";
import { Fragment } from "react";
import SearchBar from "../components/BrowseMoivesPage/SearchBar";
import Main from "../components/BrowseMoivesPage/Main";
import { useState, useEffect } from "react";
const BrowseMovies = () => {
  const [data, setData] = useState(null);
  const [sentData, setSentData] = useState(null);
  const setMovies = (quality, term, genre, rating, year, language, orderBy) => {
    setData({
      quality,
      term,
      genre,
      rating,
      year,
      language,
      orderBy,
    });
  };
  if (data !== null && data.quality !== null && data.year !== null) {
    console.log(data.quality);
  }
  // &genre=${
  //   data !== null && data.genre !== null ? data.genre : ""
  // }&minimum_rating=${
  //   data !== null && data.rating !== null ? data.rating.slice(0, 1) : ""
  // }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?quality=${
          data !== null && data.quality !== null ? data.quality : ""
        }${
          data !== null && data.term !== null && data.term.length > 1
            ? "&query_term=" + data.term
            : ""
        }${
          data !== null &&
          data.rating !== null &&
          data.rating.slice(0, 1) !== "A"
            ? "&minimum_rating=" + data.rating.slice(0, 1)
            : ""
        }${
          data !== null && data.genre !== null && data.genre !== "All"
            ? "&genre=" + data.genre
            : ""
        }${data !== null && data.year !== "Dsc" ? "&order_by=asc" : ""}${
          data !== null && data.orderBy !== null
            ? "&sort_by=" + data.orderBy.split(" ").join("")
            : ""
        }`
      );
      const data2 = await response.json();
      setSentData(data2);
    }
    fetchData();
  }, [data]);
  if (sentData) {
    console.log(sentData);
  }
  return (
    <Fragment>
      <Header stick={true} />
      <SearchBar setMovies={setMovies} />
      <Main />
    </Fragment>
  );
};
export default BrowseMovies;
