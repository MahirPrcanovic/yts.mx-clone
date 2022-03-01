import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieDetail from "../Global/MovieDetail";
const Main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  // const [link, setLink] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const helper = () => {
    setPageNumber(pageNumber + 1);
  };
  const data = useFetch({
    url: "https://yts.mx/api/v2/list_movies.json?page=",
    page: 1,
  });
  //BAD PRACTICE, TOO DEEP TO FIX IT (display grid would mess up overlay over the picture of the movie
  //, because it would take whole space available while div with picture would be only how much i set it to)
  // (overlay was delt with percentages instead of following with div under it)
  const movies = [];

  if (data) {
    for (let i = 0; i < 20; i++) {
      movies.push(data.data.movies[i]);
    }
  }
  return (
    <section className={classes.main}>
      <div className={classes.pagination}>
        <div className={classes.srce}>
          <div className={classes.paginationTitle}>
            <h2>
              <span className={classes.number}>39,468 </span>YIFY Movies found
            </h2>
          </div>
          <div className={classes.pages}>
            {arr.map((number, index) => {
              return (
                <Link
                  to={`/browse-movies?page=${pageNumber + index}`}
                  className={classes.link}
                  onClick={helper}
                  key={index}
                >
                  {pageNumber + index}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <div className={classes.details}>
          {data &&
            movies.length !== 0 &&
            movies.map((movie) => {
              return (
                <MovieDetail
                  key={movie.id}
                  image={movie.medium_cover_image}
                  genre={movie.genres}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  small={false}
                />
              );
            })}
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Main;
