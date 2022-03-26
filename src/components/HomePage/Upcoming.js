import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieDetail from "../Global/MovieDetail";
import classes from "./Upcoming.module.css";
const Upcoming = () => {
  const data = useFetch({
    url: "https://yts.mx/api/v2/list_movies.json?page=",
    page: 550,
  });
  const movies = [];
  if (data) {
    for (let i = 0; i < 4; i++) {
      movies.push(data.data.movies[i]);
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Upcoming YIFY Movies</h2>
        <a
          href="https://yts.mx/requests"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          Request a Movie
        </a>
      </div>
      <div className={classes.movies}>
        {data &&
          movies.length !== 0 &&
          movies.map((movie) => {
            return (
              <MovieDetail
                slug={movie.slug}
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
export default Upcoming;
