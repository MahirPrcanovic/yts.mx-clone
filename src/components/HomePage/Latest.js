import useFetch from "../../hooks/useFetch";
import classes from "./Latest.module.css";
import { Link } from "react-router-dom";
import MovieDetail from "../Global/MovieDetail";
const Latest = () => {
  const data = useFetch({
    url: "https://yts.mx/api/v2/list_movies.json?page=",
    page: 1,
  });
  let movies = [];
  let movies2 = [];
  if (data) {
    for (let i = 0; i < 4; i++) {
      movies.push(data.data.movies[i]);
    }
    for (let i = 4; i < 8; i++) {
      movies2.push(data.data.movies[i]);
    }
  }
  let show = true;
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Latest YIFY Movies</h2>
        <Link to="/browse-movies" className={classes.link}>
          Browse All
        </Link>
      </div>
      <div className={classes.movies}>
        {data &&
          movies.length !== 0 &&
          movies.map((movie) => {
            return (
              <MovieDetail
                showResolution={show}
                torrents={movie.torrents}
                key={movie.id}
                image={movie.medium_cover_image}
                genre={movie.genres}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
              />
            );
          })}
      </div>
      <div className={classes.movies}>
        {data &&
          movies2.length !== 0 &&
          movies2.map((movie) => {
            return (
              <MovieDetail
                showResolution={show}
                torrents={movie.torrents}
                key={movie.id}
                image={movie.medium_cover_image}
                genre={movie.genres}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Latest;
