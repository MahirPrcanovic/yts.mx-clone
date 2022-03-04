import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import MovieDetail from "../Global/MovieDetail";
let broj;
const Main = (props) => {
  let word = "";
  if (props.params !== undefined) {
    // console.log(props.params);
    ///browse-movies/:term/:quality/:genre/:rating/:sort/:order
    //${props.params.term}
    word = `${props.params.term}/${props.params.quality}/${props.params.genre}/${props.params.rating}/${props.params.sort}/${props.params.order}`;
    console.log(word);
  }
  const buttons = [];
  let movies = [];
  if (props.data) {
    // console.log(props.data.data.movie_count);
    broj = Math.ceil(props.data.data.movie_count / 20);
    // console.log(broj);
    console.log(props.data.data.movies.length);
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
              console.log(
                `/browse-movies${
                  props.params !== undefined
                    ? "/" + word + `?page=${button}`
                    : `?page=${button}`
                }${props.params === undefined ? `?page=${button}` : ""}`
              );
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
    </section>
  );
};
export default Main;
