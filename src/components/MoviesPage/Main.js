import classes from "./Main.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import image from "../../images/Background-home.jpg";
import image2 from "../../images/logo-imdb.svg";
import rottenTomatoes from "../../images/rt-upright.png";
import { Link } from "react-router-dom";
import OverlayMovies from "./OverlayMovies";
import DefaultAvatar from "../../images/default_avatar.webp";
import DownloadOverlay from "./DownloadOverlay";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../../Context/AuthContext";
import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
const Main = (props) => {
  const currentUser = useContext(LoginContext);
  //SUGGESTE MOVIES STAVITI SLUG DA SE SALJE URL !!!!!
  const location = useLocation();
  let searchQuery;
  if (location.state.searchQuery) {
    searchQuery = location.state.searchQuery;
  }
  // console.log(searchQuery);
  const history2 = useHistory();
  const [bookmark, setBookmark] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);
  const params = useParams();
  const [data, setData] = useState(null);
  const [Movie, setMovie] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [picture, setPicture] = useState(" ");
  const [video, setVideo] = useState(" ");
  const [techActive, setTechActive] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  let movie;
  const title = params.title.slice(0, params.title.length - 5);
  const year = params.title.slice(-4);
  const toggleBookmark = (id) => {
    console.log(currentUser.uid);
    updateDoc(doc(db, "users", `${currentUser.uid}`), {
      bookmarks: arrayUnion({ movieId: id }),
    });
  };

  useEffect(() => {
    let mahir = null;
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${searchQuery}&limit=50`
      );
      const data = await response.json();
      if (data.data.movies && data.data) {
        for (let i = 0; i < data.data.movies.length; i++) {
          if (data.data.movies[i].slug === params.title) {
            mahir = data.data.movies[i];
          }
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
      if (!mahir) {
        history2.push("/");
      }
    }

    fetchData();
  }, [title, year, history2, params.title, searchQuery]);
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].slug === params.title) {
        movie = data[i];
      }
    }
  }
  if (currentUser) {
    const doc2 = doc(db, "users", `${currentUser ? currentUser.uid : ""}`);
    console.log(getDoc(doc2).then((res) => console.log(res.data())));
  }
  return (
    <section className={classes.main}>
      <div
        className={classes.overviewContainer} //WHOLE OVERVIEW CONTAINER
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
            <button
              className={`${classes.button} ${classes.downloadButton}`}
              onClick={() => setShowDownload(true)}
            >
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
                {currentUser && (
                  <div className={classes.item}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${classes.icon} ${classes.bookmark}`}
                      onClick={() => {
                        toggleBookmark(Movie ? Movie.data.movie.id : "");
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    <h3>Bookmark</h3>
                  </div>
                )}
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
              Movie ? Movie.data.movie.medium_screenshot_image1 : ""
            })`,
            backgroundPosition: "centre",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            setShowModal(true);
            setPicture("");
            setVideo(
              `${
                Movie
                  ? `https://www.youtube.com/embed/${Movie.data.movie.yt_trailer_code}`
                  : ""
              }`
            );
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
              Movie ? Movie.data.movie.medium_screenshot_image2 : ""
            })`,
            backgroundPosition: "centre",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            setShowModal(true);
            setPicture(
              `${Movie ? Movie.data.movie.large_screenshot_image2 : ""}`
            );
            setVideo("");
          }}
        ></div>
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
          onClick={() => {
            setShowModal(true);
            setPicture(
              `${Movie ? Movie.data.movie.large_screenshot_image3 : ""}`
            );
            setVideo("");
          }}
        ></div>
        {showModal && (
          <OverlayMovies
            video={video}
            picture={picture}
            close={() => setShowModal(false)}
          />
        )}
      </div>
      <div className={classes.cast}>
        <div className={classes.container}>
          <div className={classes.introduction}>
            <h1 className={classes.introTitle}>Synopsis</h1>
            <p className={classes.introText}>
              {Movie && Movie.data.movie.description_full
                ? Movie.data.movie.description_full
                : ""}
            </p>
            <p className={classes.introText}>
              Coded By: <strong>Mahir</strong>
              <br />
              March 11, 2022 at 3:24 PM
            </p>
          </div>
          <div className={classes.castInfo}>
            <div className={classes.castContainer}>
              {Movie && Movie.data.movie.cast && (
                <h1 className={classes.castTitle}>Cast</h1>
              )}
              {Movie && Movie.data.movie.cast && Movie.data.movie.cast[0] && (
                <a
                  className={classes.castMember}
                  href={`https://www.imdb.com/name/nm${
                    Movie && Movie.data.movie.cast && Movie.data.movie.cast[0]
                      ? Movie.data.movie.cast[0].imdb_code
                      : ""
                  }/?ref_=tt_ov_st`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={classes.castPicture}
                    style={{
                      backgroundImage:
                        Movie &&
                        Movie.data.movie.cast &&
                        Movie.data.movie.cast[0] &&
                        Movie.data.movie.cast[0].url_small_image
                          ? `url(${Movie.data.movie.cast[0].url_small_image})`
                          : DefaultAvatar,
                      backgroundPosition: "centre",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <h3 className={classes.castName}>
                    {Movie &&
                    Movie.data.movie.cast &&
                    Movie.data.movie.cast[0] &&
                    Movie.data.movie.cast[0].name
                      ? `${Movie.data.movie.cast[0].name}`
                      : ""}
                  </h3>
                  <h3 className={classes.character}>
                    {" "}
                    {`as ${
                      Movie &&
                      Movie.data.movie.cast &&
                      Movie.data.movie.cast[0] &&
                      Movie.data.movie.cast[0].character_name
                        ? Movie.data.movie.cast[0].character_name
                        : ""
                    }`}
                  </h3>
                </a>
              )}
              {Movie && Movie.data.movie.cast && Movie.data.movie.cast[1] && (
                <a
                  className={classes.castMember}
                  href={`https://www.imdb.com/name/nm${
                    Movie && Movie.data.movie.cast && Movie.data.movie.cast[1]
                      ? Movie.data.movie.cast[1].imdb_code
                      : ""
                  }/?ref_=tt_ov_st`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={classes.castPicture}
                    style={{
                      backgroundImage:
                        Movie &&
                        Movie.data.movie.cast &&
                        Movie.data.movie.cast[1] &&
                        Movie.data.movie.cast[1].url_small_image
                          ? `url(${Movie.data.movie.cast[1].url_small_image})`
                          : DefaultAvatar,
                      backgroundPosition: "centre",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <h3 className={classes.castName}>
                    {Movie &&
                    Movie.data.movie.cast &&
                    Movie.data.movie.cast[1] &&
                    Movie.data.movie.cast[1].name
                      ? `${Movie.data.movie.cast[1].name}`
                      : ""}
                  </h3>
                  <h3 className={classes.character}>
                    {" "}
                    {`as ${
                      Movie &&
                      Movie.data.movie.cast &&
                      Movie.data.movie.cast[1] &&
                      Movie.data.movie.cast[1].character_name
                        ? Movie.data.movie.cast[1].character_name
                        : ""
                    }`}
                  </h3>
                </a>
              )}
              {Movie && Movie.data.movie.cast && Movie.data.movie.cast[2] && (
                <a
                  className={classes.castMember}
                  href={`https://www.imdb.com/name/nm${
                    Movie && Movie.data.movie.cast && Movie.data.movie.cast[2]
                      ? Movie.data.movie.cast[2].imdb_code
                      : ""
                  }/?ref_=tt_ov_st`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={classes.castPicture}
                    style={{
                      backgroundImage:
                        Movie &&
                        Movie.data.movie.cast &&
                        Movie.data.movie.cast[2] &&
                        Movie.data.movie.cast[2].url_small_image
                          ? `url(${Movie.data.movie.cast[2].url_small_image})`
                          : "",

                      backgroundPosition: "centre",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <h3 className={classes.castName}>
                    {Movie &&
                    Movie.data.movie.cast &&
                    Movie.data.movie.cast[2] &&
                    Movie.data.movie.cast[2].name
                      ? `${Movie.data.movie.cast[2].name}`
                      : ""}
                  </h3>
                  <h3 className={classes.character}>
                    {" "}
                    {`as ${
                      Movie &&
                      Movie.data.movie.cast &&
                      Movie.data.movie.cast[2] &&
                      Movie.data.movie.cast[2].character_name
                        ? Movie.data.movie.cast[2].character_name
                        : ""
                    }`}
                  </h3>
                </a>
              )}
              {Movie && Movie.data.movie.cast && Movie.data.movie.cast[3] && (
                <a
                  className={classes.castMember}
                  href={`https://www.imdb.com/name/nm${
                    Movie && Movie.data.movie.cast && Movie.data.movie.cast[3]
                      ? Movie.data.movie.cast[3].imdb_code
                      : ""
                  }/?ref_=tt_ov_st`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={classes.castPicture}
                    style={{
                      backgroundImage:
                        Movie &&
                        Movie.data.movie.cast &&
                        Movie.data.movie.cast[3] &&
                        Movie.data.movie.cast[3].url_small_image
                          ? `url(${Movie.data.movie.cast[3].url_small_image})`
                          : DefaultAvatar,
                      backgroundPosition: "centre",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <h3 className={classes.castName}>
                    {Movie &&
                    Movie.data.movie.cast &&
                    Movie.data.movie.cast[3] &&
                    Movie.data.movie.cast[3].name
                      ? `${Movie.data.movie.cast[3].name}`
                      : ""}
                  </h3>
                  <h3 className={classes.character}>
                    {" "}
                    {`as ${
                      Movie &&
                      Movie.data.movie.cast &&
                      Movie.data.movie.cast[3] &&
                      Movie.data.movie.cast[3].character_name
                        ? Movie.data.movie.cast[3].character_name
                        : ""
                    }`}
                  </h3>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.techSpec}>
        <div className={classes.techContainer}>
          <div className={classes.techIntro}>
            <h1>Tech Specs</h1>
            <div className={classes.techFlex}>
              <div
                className={classes.insideDiv}
                style={{
                  backgroundColor: `${techActive === 0 ? "black" : ""}`,
                  color: `${techActive === 0 ? "white" : ""}`,
                }}
                onClick={() => {
                  setTechActive(0);
                }}
              >
                {Movie &&
                Movie.data.movie.torrents &&
                Movie.data.movie.torrents[0] ? (
                  <h3>720p.WEB</h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={classes.insideDiv}
                style={{
                  backgroundColor: `${techActive === 1 ? "black" : ""}`,
                  color: `${techActive === 1 ? "white" : ""}`,
                }}
                onClick={() => {
                  setTechActive(1);
                }}
              >
                {Movie &&
                Movie.data.movie.torrents &&
                Movie.data.movie.torrents[1] ? (
                  <h3>1080p.WEB</h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={classes.insideDiv}
                style={{
                  backgroundColor: `${techActive === 2 ? "black" : ""}`,
                  color: `${techActive === 2 ? "white" : ""}`,
                }}
                onClick={() => {
                  setTechActive(2);
                }}
              >
                {Movie &&
                Movie.data.movie.torrents &&
                Movie.data.movie.torrents[2] ? (
                  <h3>2160p.WEB</h3>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className={classes.techInfo}>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.techIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              {Movie && Movie.data.movie.torrents[techActive] ? (
                <h2>{Movie.data.movie.torrents[techActive].size}</h2>
              ) : (
                ""
              )}
            </div>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#82877d"
                className={classes.techIcon}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="168 48 208 48 208 88"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="152"
                  y1="104"
                  x2="208"
                  y2="48"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="88 208 48 208 48 168"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="104"
                  y1="152"
                  x2="48"
                  y2="208"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="208 168 208 208 168 208"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="152"
                  y1="152"
                  x2="208"
                  y2="208"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="48 88 48 48 88 48"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="104"
                  y1="104"
                  x2="48"
                  y2="48"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
              {techActive === 0 ? <h2>1280*534</h2> : ""}
              {techActive === 1 ? <h2>1920*800</h2> : ""}
              {techActive === 2 ? <h2>3840*1600</h2> : ""}
            </div>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.techIcon}
                viewBox="0 0 20 20"
                fill="#82877d"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              {Movie && Movie.data.movie.language ? (
                <h2>{Movie.data.movie.language}</h2>
              ) : (
                ""
              )}
            </div>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.techIcon}
                viewBox="0 0 20 20"
                fill="#82877d"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              {Movie && Movie.data.movie && Movie.data.movie.mpa_rating ? (
                <h2>{Movie.data.movie.mpa_rating}</h2>
              ) : (
                ""
              )}
            </div>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#82877d"
                viewBox="0 0 256 256"
                className={classes.techIcon}
              >
                <rect width="256" height="256" fill="none"></rect>
                <rect
                  x="32"
                  y="48"
                  width="192"
                  height="160"
                  rx="8"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></rect>
                <path
                  d="M116,147.6a28,28,0,1,1,0-39.2"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M188,147.6a28,28,0,1,1,0-39.2"
                  fill="none"
                  stroke="#82877d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
              <a
                href={`https://yifysubtitles.org/movie-imdb/${
                  Movie ? Movie.data.movie.imdb_code : ""
                }`}
              >
                Subtitles
              </a>
            </div>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.techIcon}
                viewBox="0 0 20 20"
                fill="#82877d"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {Movie ? <h2>{Movie.data.movie.download_count}</h2> : ""}
            </div>
            <div className={classes.techDiv}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.techIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {Movie && Movie.data.movie.runtime ? (
                <h2>{Movie.data.movie.runtime} min</h2>
              ) : (
                ""
              )}
            </div>
            <div className={classes.techDiv}>
              <h2>
                P/S{" "}
                {Movie &&
                Movie.data.movie.torrents[techActive].seeds &&
                Movie.data.movie.torrents[techActive].peers
                  ? Movie.data.movie.torrents[techActive].peers +
                    " / " +
                    Movie.data.movie.torrents[techActive].seeds
                  : ""}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.reviews}>
        <div className={classes.reviewsContainer}>
          <h1>
            Reviews and comment section are not available due to problems with
            API.
          </h1>
        </div>
      </div>
      {showDownload && (
        <DownloadOverlay close={() => setShowDownload(false)} data={Movie} />
      )}
    </section>
  );
};
export default Main;
