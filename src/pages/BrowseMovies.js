import Header from "../components/Global/Header";
import { Fragment } from "react";
import SearchBar from "../components/BrowseMoivesPage/SearchBar";
import Main from "../components/BrowseMoivesPage/Main";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BrowseMovies = () => {
  let name;
  let queryParams;
  let params;
  params = useParams();
  queryParams = new URLSearchParams(window.location.search);
  name = queryParams.get("page");
  const [sentData, setSentData] = useState(null);
  console.log(params);
  console.log(name);
  let word;
  word = `?page=${name !== null ? name : "1"}${
    params.term !== undefined
      ? params.quality !== "All"
        ? `&quality=${params.quality}`
        : ""
      : ""
  }${
    params.term !== undefined
      ? params.rating.slice(0, 1) !== "A"
        ? `&minimum_rating=${params.rating.slice(0, 1)}`
        : ""
      : ""
  }${
    params.term !== undefined
      ? params.term !== ""
        ? `&query_term=${params.term}`
        : ""
      : ""
  }${
    params.term !== undefined
      ? params.sort !== "Dsc"
        ? `&order_by=${params.sort}`
        : ""
      : ""
  }${params.term !== undefined ? `&sort_by=${params.sort}` : ""}${
    params.term !== undefined
      ? params.genre !== "All"
        ? `&genre=${params.genre}`
        : ""
      : ""
  }`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json${word ? word : " "}`
      );
      const data = await response.json();
      setSentData(data);
    };
    fetchData();
  }, [params, name]);

  console.log(sentData);

  return (
    <Fragment>
      <Header stick={true} />
      <SearchBar />
      <Main data={sentData} params={params} name={name} />
    </Fragment>
  );
};
export default BrowseMovies;
