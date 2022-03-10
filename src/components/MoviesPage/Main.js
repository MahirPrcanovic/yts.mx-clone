import classes from "./Main.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../../images/Background-home.jpg";
import image2 from "../../images/logo-imdb.svg";
import rottenTomatoes from "../../images/rt-upright.png";
import { Link } from "react-router-dom";
import OverlayMovies from "../Global/OverlayMovies";
const Main = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [Movie, setMovie] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let movie;
  const title = params.title
    .slice(0, params.title.length - 5)
    .split("-")
    .join(" ");
  const year = params.title.slice(-4);
  // console.log(title);
  useEffect(() => {
    let mahir;
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${title.toLowerCase()}&with_rt_ratings=true`
      );
      const data = await response.json();
      console.log(data);
      for (let i = 0; i < data.data.movies.length; i++) {
        if (data.data.movies[i].year === +year) {
          mahir = data.data.movies[i];
        }
      }
      setData(data.data.movies);
      if (mahir) {
        const response2 = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${mahir.id}&with_images=true&with_cast=true`
        );
        const data2 = await response2.json();
        setMovie(data2);
      }
      if (mahir) {
        const response3 = await fetch(
          `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${mahir.id}`
        );
        const data3 = await response3.json();
        setSuggestions(data3);
      }
    }

    fetchData();
  }, [title, year]);
  if (data) {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].year === +year) {
        movie = data[i];
      }
    }
  }
  if (suggestions && Movie) {
    console.log(suggestions);
    console.log(Movie);
  }
  return (
    <section className={classes.main}>
      <div
        className={classes.overviewContainer}
        style={{
          backgroundImage: `url(${movie ? movie.background_image : ""})`,
          backgroundPosition: "centre",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.overview}>
          <div className={classes.picture}>
            <div
              className={classes.block}
              style={{
                backgroundImage: `url(${
                  movie && movie.large_cover_image
                    ? movie.large_cover_image
                    : image
                })`,
                backgroundPosition: "centre",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <button className={classes.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>{" "}
              Download
            </button>
            <button className={classes.button}>Watch Now</button>
          </div>
          <div className={classes.text}>
            <div className={classes.items}>
              <h1 className={classes.title}>{movie ? movie.title : ""}</h1>
              <div className={classes.year}>
                <h2>{movie ? movie.year : ""}</h2>
                <h2>
                  {movie && movie.genres ? movie.genres[0] : ""}
                  {movie && movie.genres && movie.genres[1] !== undefined
                    ? ` / ${movie.genres[1]}`
                    : ""}
                  {movie && movie.genres && movie.genres[2] !== undefined
                    ? ` / ${movie.genres[2]}`
                    : ""}
                  {movie && movie.genres && movie.genres[3] !== undefined
                    ? ` / ${movie.genres[3]}`
                    : ""}
                  {movie && movie.genres && movie.genres[4] !== undefined
                    ? ` / ${movie.genres[4]}`
                    : ""}
                </h2>
              </div>
              <div className={classes.available}>
                <div className={classes.buttons}>
                  <h2 className={classes.availableText}>Available in:</h2>
                  {movie && movie.torrents && movie.torrents[0] && (
                    <a
                      className={classes.resolution}
                      href={`${movie.torrents[0].url}`}
                    >
                      720p.WEB
                    </a>
                  )}
                  {movie && movie.torrents && movie.torrents[1] && (
                    <a
                      className={classes.resolution}
                      href={`${movie.torrents[1].url}`}
                    >
                      1080p.WEB
                    </a>
                  )}
                  {movie && movie.torrents && movie.torrents[2] && (
                    <a
                      className={classes.resolution}
                      href={`${movie.torrents[2].url}`}
                    >
                      2160p.WEB
                    </a>
                  )}
                </div>
                <h3 className={classes.underlineText}>
                  WEB: same quality as BluRay, but ripped earlier from a
                  streaming service
                </h3>
              </div>

              <a
                className={classes.download}
                href={`https://yifysubtitles.org/movie-imdb/${
                  movie ? movie.imdb_code : ""
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${classes.icon}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>{" "}
                Download Subtitles
              </a>
              <div className={classes.review}>
                <div className={classes.item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${classes.icon} ${classes.heart}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3>{Movie ? Movie.data.movie.like_count : " "}</h3>
                </div>
                <div className={classes.item}>
                  <a
                    className={classes.rotten}
                    style={{
                      backgroundImage: `url(${rottenTomatoes})`,
                    }}
                    href={`https://www.rottentomatoes.com/m/${
                      Movie ? Movie.data.movie.title.split(" ").join("_") : ""
                    } `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    _
                  </a>
                  <h3>Critics</h3>
                </div>
                <div className={classes.item}>
                  <a
                    className={classes.imdb}
                    style={{
                      backgroundImage: `url(${image2})`,
                    }}
                    href={`https://www.imdb.com/title/${
                      Movie ? Movie.data.movie.imdb_code : ""
                    }/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    _
                  </a>
                  <h3>{Movie ? Movie.data.movie.rating : ""}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${classes.icon} ${classes.heart}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.similar}>
            <h3 className={classes.similarTitle}>Similar Movies</h3>
            <div className={classes.similarContainer}>
              <Link
                className={classes.similarBlock}
                to={`/movies/${
                  suggestions && suggestions.data.movies[0]
                    ? `${suggestions.data.movies[0].title
                        .split(" ")
                        .join("-")}-${suggestions.data.movies[0].year}`
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${
                    suggestions && suggestions.data.movies[0]
                      ? suggestions.data.movies[0].medium_cover_image
                      : ""
                  })`,
                  backgroundPosition: "centre",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Link>
              <Link
                className={classes.similarBlock}
                to={`/movies/${
                  suggestions && suggestions.data.movies[1]
                    ? `${suggestions.data.movies[1].title
                        .split(" ")
                        .join("-")}-${suggestions.data.movies[1].year}`
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${
                    suggestions && suggestions.data.movies[1]
                      ? suggestions.data.movies[1].medium_cover_image
                      : ""
                  })`,
                  backgroundPosition: "centre",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Link>
              <Link
                className={classes.similarBlock}
                to={`/movies/${
                  suggestions && suggestions.data.movies[2]
                    ? `${suggestions.data.movies[2].title
                        .split(" ")
                        .join("-")}-${suggestions.data.movies[2].year}`
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${
                    suggestions && suggestions.data.movies[2]
                      ? suggestions.data.movies[2].medium_cover_image
                      : ""
                  })`,
                  backgroundPosition: "centre",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Link>
              <Link
                className={classes.similarBlock}
                to={`/movies/${
                  suggestions && suggestions.data.movies[3]
                    ? `${suggestions.data.movies[3].title
                        .split(" ")
                        .join("-")}-${suggestions.data.movies[3].year}`
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${
                    suggestions && suggestions.data.movies[3]
                      ? suggestions.data.movies[3].medium_cover_image
                      : ""
                  })`,
                  backgroundPosition: "centre",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.pictures}>
        <div
          className={classes.trailer}
          style={{
            backgroundImage: `url(${
              Movie ? Movie.data.movie.medium_screenshot_image2 : ""
            })`,
            backgroundPosition: "centre",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#ffffff"
            viewBox="0 0 256 256"
            className={classes.play}
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="128"
              r="96"
              fill="none"
              stroke="#ffffff"
              strokeMiterlimit="10"
              strokeWidth="10"
            ></circle>
            <polygon
              points="160 128 112 96 112 160 160 128"
              fill="#ffffff"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="10"
            ></polygon>
          </svg>
          Trailer
        </div>
        <div
          className={classes.trailer}
          style={{
            backgroundImage: `url(${
              Movie ? Movie.data.movie.medium_screenshot_image3 : ""
            })`,
            backgroundPosition: "centre",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className={classes.trailer}
          style={{
            backgroundImage: `url(${
              Movie ? Movie.data.movie.medium_screenshot_image1 : ""
            })`,
            backgroundPosition: "centre",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {showModal && <OverlayMovies close={() => setShowModal(false)} />}
      </div>
    </section>
  );
};
export default Main;
