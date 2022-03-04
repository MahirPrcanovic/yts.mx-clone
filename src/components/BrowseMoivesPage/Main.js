import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import MovieDetail from "../Global/MovieDetail";
const Main = (props) => {
  let broj;
  let word = "";
  if (props.data) {
    console.log(props.data);
  }
  if (props.params.term !== undefined) {
    word = `${props.params.term}/${props.params.quality}/${props.params.genre}/${props.params.rating}/${props.params.sort}/${props.params.order}`;
  }

  const buttons = [];
  let movies = [];
  if (props.data) {
    broj = Math.ceil(props.data.data.movie_count / 20);
    if (broj === 0) {
    } else {
      for (let i = 0; i < broj; i++) {
        buttons.push(i + 1);
      }
    }
    if (props.data.data.movie_count && props.data.data.movie_count > 0) {
      for (let i = 0; i < props.data.data.movies.length; i++) {
        movies.push(props.data.data.movies[i]);
      }
    }
  }

  return (
    <section className={classes.main}>
      <div className={classes.pagination}>
        <div className={classes.srce}>
          <div className={classes.paginationTitle}>
            <h2>
              <span className={classes.number}>
                {props.data && props.data.data && props.data.data.movie_count
                  ? props.data.data.movie_count
                  : ""}{" "}
              </span>
              YIFY Movies found
            </h2>
          </div>
          <div className={classes.pages}>
            <Link className={classes.link} to={`/browse-movies`}>
              Link
            </Link>
            {buttons.map((button, index) => {
              return (
                <Link
                  className={classes.link}
                  to={`/browse-movies${
                    props.params !== undefined
                      ? "/" + word + `?page=${button}`
                      : `?page=${button}`
                  }${props.params === undefined ? `?page=${button}` : ""}`}
                  key={index}
                >
                  {button}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <div className={classes.details}>
          {movies.length !== 0 &&
            movies.map((movie, index) => {
              return (
                <MovieDetail
                  key={index}
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
    </section>
  );
};
export default Main;
