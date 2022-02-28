import useFetch from "../../hooks/useFetch";
import classes from "./Latest.module.css";
import { Link } from "react-router-dom";
import MovieDetail from "../MovieDetail";
const Latest = () => {
  const data = useFetch({
    url: "https://yts.mx/api/v2/list_movies.json?page=",
    page: 1977,
  });
  let movies = [];
  if (data) {
    for (let i = 0; i < 8; i++) {
      movies.push(data.data.movies[i]);
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Upcoming YIFY Movies</h2>
        <Link to="/requests" className={classes.link}>
          Request a Movie
        </Link>
      </div>
      <div className={classes.movies}>
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
              />
            );
          })}
      </div>
    </div>
  );
};
export default Latest;
