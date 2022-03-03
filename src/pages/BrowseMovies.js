import Header from "../components/Global/Header";
import { Fragment } from "react";
import SearchBar from "../components/BrowseMoivesPage/SearchBar";
import Main from "../components/BrowseMoivesPage/Main";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const BrowseMovies = () => {
  const history = useHistory();
  const [sentData, setSentData] = useState(null);
  const params = useParams();
  // :term/:quality/:genre/:rating/:sort/:order
  let name;
  let queryParams;
  console.log(params.term);
  console.log(params.quality);
  console.log(params.genre);
  console.log(params.rating);
  console.log(params.sort);
  console.log(params.order);
  let fine = false;
  if (
    params.term === undefined &&
    params.quality === undefined &&
    params.genre === undefined &&
    params.rating === undefined &&
    params.sort === undefined &&
    params.order === undefined
  ) {
    fine = true;
  }
  queryParams = new URLSearchParams(window.location.search);
  name = queryParams.get("page");
  console.log(name);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json${
          params.term === undefined && name === null ? "?page=1" : ""
        }${params.term === undefined && name !== null ? "?page=" + name : ""}
      ${params.term !== undefined && name === null ? "?page=1" : ""}${
          params.term !== undefined ? "&quality=" + params.quality : ""
        }${
          params.term !== undefined && params.genre !== "All"
            ? "&genre=" + params.genre
            : ""
        }${
          params.term !== undefined && params.rating.slice(0, 1) !== "A"
            ? "&minimum_rating=" + params.rating.slice(0, 1)
            : ""
        }${
          params.term !== undefined && params.term !== "0"
            ? "&query_term=" + params.term
            : ""
        }${
          params.term !== undefined && params.year !== "Dsc"
            ? "&order_by=" + params.sort
            : ""
        }${params.term !== undefined ? "&sort_by=" + params.order : ""}`
      );
      console.log(`https://yts.mx/api/v2/list_movies.json${
        params.term === undefined && name !== null ? "?page=" + name : ""
      }${params.term === undefined && name === null ? "?page=1" : ""}
      ${params.term !== undefined && name !== null ? "?page=" + name : ""}${
        params.term !== undefined ? "&quality=" + params.quality : ""
      }${
        params.term !== undefined && params.genre !== "All"
          ? "&genre=" + params.genre
          : ""
      }${
        params.term !== undefined && params.rating.slice(0, 1) !== "A"
          ? "&minimum_rating=" + params.rating.slice(0, 1)
          : ""
      }${
        params.term !== undefined && params.term !== "0"
          ? "&query_term=" + params.term
          : ""
      }${
        params.term !== undefined && params.year !== "Dsc"
          ? "&order_by=" + params.sort
          : ""
      }${params.term !== undefined ? "&sort_by=" + params.order : ""}`);
      const data = await response.json();
      setSentData(data);
    }
    fetchData();
  }, [params, name]);
  return (
    <Fragment>
      <Header stick={true} />
      <SearchBar />
      <Main data={sentData} />
    </Fragment>
  );
};
export default BrowseMovies;
