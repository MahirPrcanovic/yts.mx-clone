import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import MovieDetail from "../Global/MovieDetail";
import { useState } from "react";
const Main = (props) => {
  // setWidth(window.screen.width);
  let activePage;
  let activeIndex;
  const [niz, setNiz] = useState([
    +props.name + 0,
    +props.name + 1,
    +props.name + 2,
    +props.name + 3,
    +props.name + 4,
    +props.name + 5,
    +props.name + 6,
    +props.name + 7,
  ]);
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
  activePage = +props.name;
  // let niz = [1, 2, 3, 4, 5, 6, 7, 8];
  if (activePage === 0) {
    activePage = 1;
  }
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
    console.log(activePage, broj);
  }
  activeIndex = niz.indexOf(activePage);
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
            {window.screen.width > 980 && (
              <Link
                className={`${classes.link} ${
                  broj === 1 && activePage === 1 ? classes.hidden : ""
                }`}
                to={`/browse-movies${
                  props.params !== undefined ? "/" + word + `?page=1` : ``
                }${props.params === undefined ? `?page=1` : ""}`}
              >
                First
              </Link>
            )}
            <Link
              className={`${classes.link} ${
                broj === 1 && activePage === 1 ? classes.hidden : ""
              } ${activePage === 1 ? classes.hidden : ""} ${classes.previous}`}
              to={`/browse-movies${
                props.params !== undefined
                  ? "/" +
                    word +
                    `?page=${activePage > 1 ? activePage - 1 : `${broj}`}`
                  : ``
              }${
                props.params === undefined
                  ? `?page=${activePage > 1 ? activePage - 1 : `${broj}`}`
                  : ""
              }`}
              onClick={() => {
                // console.log(niz[niz.length - 1]);
                if (activePage === niz[0]) {
                  setNiz((prevNiz) => {
                    let noviNiz = prevNiz;
                    noviNiz[0] = prevNiz[0] - 8;
                    noviNiz[1] = prevNiz[1] - 8;
                    noviNiz[2] = prevNiz[2] - 8;
                    noviNiz[3] = prevNiz[3] - 8;
                    noviNiz[4] = prevNiz[4] - 8;
                    noviNiz[5] = prevNiz[5] - 8;
                    noviNiz[6] = prevNiz[6] - 8;
                    noviNiz[7] = prevNiz[7] - 8;
                    return noviNiz;
                  });
                }
              }}
            >
              Previous
            </Link>
            {window.screen.width < 980 && (
              <div
                className={`${classes.link} ${classes.previous}`}
              >{`${activePage} of ${broj}`}</div>
            )}
            {broj > 1 &&
              broj < 8 &&
              window.screen.width > 980 &&
              buttons.map((button, index) => {
                return (
                  <Link
                    className={`${classes.link} ${
                      activeIndex === index ? classes.active : ""
                    }`}
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
            {broj > 1 &&
              broj > 8 &&
              window.screen.width > 980 &&
              niz.map((button, index) => {
                return (
                  <Link
                    className={`${classes.link} ${
                      button > broj ? classes.hidden : ""
                    } ${activeIndex === index ? classes.active : ""}`}
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
            <Link
              className={`${classes.link} ${
                broj === 1 && activePage === 1 ? classes.hidden : ""
              }${broj > 1 && activePage === broj ? classes.hidden : ""}`}
              to={`/browse-movies${
                props.params !== undefined
                  ? "/" +
                    word +
                    `?page=${activePage < broj ? activePage + 1 : "1"}`
                  : ``
              }${
                props.params === undefined
                  ? `?page=${activePage < broj ? activePage + 1 : "1"}`
                  : ""
              }`}
              onClick={() => {
                if (activePage === niz[niz.length - 1]) {
                  setNiz((prevNiz) => {
                    let noviNiz = prevNiz;
                    noviNiz[0] = prevNiz[0] + 8;
                    noviNiz[1] = prevNiz[1] + 8;
                    noviNiz[2] = prevNiz[2] + 8;
                    noviNiz[3] = prevNiz[3] + 8;
                    noviNiz[4] = prevNiz[4] + 8;
                    noviNiz[5] = prevNiz[5] + 8;
                    noviNiz[6] = prevNiz[6] + 8;
                    noviNiz[7] = prevNiz[7] + 8;
                    return noviNiz;
                  });
                }
              }}
            >
              Next
            </Link>
            {window.screen.width > 980 && (
              <Link
                className={`${classes.link} ${
                  broj === 1 && activePage === 1 ? classes.hidden : ""
                }`}
                to={`/browse-movies${
                  props.params !== undefined ? "/" + word + `?page=${broj}` : ``
                }${props.params === undefined ? `?page=${broj}` : ""}`}
              >
                Latest
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <div className={classes.details}>
          {movies.length !== 0 &&
            movies.map((movie, index) => {
              return (
                <MovieDetail
                  slug={movie.slug}
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
            {window.screen.width > 980 && (
              <Link
                className={`${classes.link} ${
                  broj === 1 && activePage === 1 ? classes.hidden : ""
                }`}
                to={`/browse-movies${
                  props.params !== undefined ? "/" + word + `?page=1` : ``
                }${props.params === undefined ? `?page=1` : ""}`}
              >
                First
              </Link>
            )}
            <Link
              className={`${classes.link} ${
                broj === 1 && activePage === 1 ? classes.hidden : ""
              } ${activePage === 1 ? classes.hidden : ""} ${classes.previous}`}
              to={`/browse-movies${
                props.params !== undefined
                  ? "/" +
                    word +
                    `?page=${activePage > 1 ? activePage - 1 : `${broj}`}`
                  : ``
              }${
                props.params === undefined
                  ? `?page=${activePage > 1 ? activePage - 1 : `${broj}`}`
                  : ""
              }`}
              onClick={() => {
                // console.log(niz[niz.length - 1]);
                if (activePage === niz[0]) {
                  setNiz((prevNiz) => {
                    let noviNiz = prevNiz;
                    noviNiz[0] = prevNiz[0] - 8;
                    noviNiz[1] = prevNiz[1] - 8;
                    noviNiz[2] = prevNiz[2] - 8;
                    noviNiz[3] = prevNiz[3] - 8;
                    noviNiz[4] = prevNiz[4] - 8;
                    noviNiz[5] = prevNiz[5] - 8;
                    noviNiz[6] = prevNiz[6] - 8;
                    noviNiz[7] = prevNiz[7] - 8;
                    return noviNiz;
                  });
                }
              }}
            >
              Previous
            </Link>
            {window.screen.width < 980 && (
              <Link
                className={`${classes.link} ${classes.previous}`}
              >{`${activePage} of ${broj}`}</Link>
            )}
            {broj > 1 &&
              broj < 8 &&
              window.screen.width > 980 &&
              buttons.map((button, index) => {
                return (
                  <Link
                    className={`${classes.link} ${
                      activeIndex === index ? classes.active : ""
                    }`}
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
            {broj > 1 &&
              broj > 8 &&
              window.screen.width > 980 &&
              niz.map((button, index) => {
                return (
                  <Link
                    className={`${classes.link} ${
                      button > broj ? classes.hidden : ""
                    } ${activeIndex === index ? classes.active : ""}`}
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
            <Link
              className={`${classes.link} ${
                broj === 1 && activePage === 1 ? classes.hidden : ""
              }${broj > 1 && activePage === broj ? classes.hidden : ""}`}
              to={`/browse-movies${
                props.params !== undefined
                  ? "/" +
                    word +
                    `?page=${activePage < broj ? activePage + 1 : "1"}`
                  : ``
              }${
                props.params === undefined
                  ? `?page=${activePage < broj ? activePage + 1 : "1"}`
                  : ""
              }`}
              onClick={() => {
                if (activePage === niz[niz.length - 1]) {
                  setNiz((prevNiz) => {
                    let noviNiz = prevNiz;
                    noviNiz[0] = prevNiz[0] + 8;
                    noviNiz[1] = prevNiz[1] + 8;
                    noviNiz[2] = prevNiz[2] + 8;
                    noviNiz[3] = prevNiz[3] + 8;
                    noviNiz[4] = prevNiz[4] + 8;
                    noviNiz[5] = prevNiz[5] + 8;
                    noviNiz[6] = prevNiz[6] + 8;
                    noviNiz[7] = prevNiz[7] + 8;
                    return noviNiz;
                  });
                }
              }}
            >
              Next
            </Link>
            {window.screen.width > 980 && (
              <Link
                className={`${classes.link} ${
                  broj === 1 && activePage === 1 ? classes.hidden : ""
                }`}
                to={`/browse-movies${
                  props.params !== undefined ? "/" + word + `?page=${broj}` : ``
                }${props.params === undefined ? `?page=${broj}` : ""}`}
              >
                Latest
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
