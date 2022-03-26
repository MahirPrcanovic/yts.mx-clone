// import Logo from "../images/yts-logo.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import searchClasses from "../BrowseMoivesPage/SearchBar.module.css";
import RegisterOverlay from "./Register-LoginOverlay";
import { useContext } from "react";
import { LoginContext } from "../../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Redirect } from "react-router-dom";
const orders = [
  "Title",
  "Year",
  "Rating",
  "Peers",
  "Seeds",
  "Download Count",
  "Like count",
  "Date Added",
];
const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-show",
  "History",
  "Horror",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];
const ratings = ["All", "9+", "8+", "7+", "6+", "5+", "4+", "3+", "2+", "1+"];
const years = ["Dsc", "Asc"];
const Header = (props) => {
  const currentUser = useContext(LoginContext);
  let index;
  if (currentUser && currentUser.email) {
    index = currentUser.email.indexOf("@");
  }
  console.log(currentUser ? currentUser.email : "");
  const [viewLogin, setViewLogin] = useState(false);
  const [trigger, setTrigger] = useState(" ");
  const selectedQuality = useRef();
  let emailIndex = currentUser ? currentUser.email.indexOf("@") : "";
  let name = currentUser ? currentUser.email.slice(0, index) : "";
  const selectedTerm = useRef();
  const selectedGenre = useRef();
  const selectedRating = useRef();
  const selectedYear = useRef();
  const [show, setShow] = useState(false);
  // const selectedLanguage = useRef();
  const selectedOrderBy = useRef();
  const history = useHistory();
  let quality, term, genre, rating, year, orderBy;
  //https://yts.mx/api/v2/list_movies.json?query_term=spider-man ZA SEARCHANJE
  //Pomocu ovog koristiti i napraviti search
  const valu = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    quality = selectedQuality.current.value;
    term = selectedTerm.current.value;
    genre = selectedGenre.current.value;
    rating = selectedRating.current.value;
    year = selectedYear.current.value;
    // language = selectedLanguage.current.value;
    orderBy = selectedOrderBy.current.value;
    history.replace(
      `/browse-movies/${
        term.trim().length === 0 ? "0" : term.trim()
      }/${quality}/${genre}/${rating.slice(0, 1)}/${year}/${orderBy}`
    );
  };
  const inputHandler = (e) => {
    e.preventDefault();
    console.log(valu.current.value);
    history.push(`/browse-movies/${valu.current.value}/All/All/A/Dsc/Title`);
  };
  return (
    <Fragment>
      <div
        className={classes.header}
        style={{ position: `${props.stick === true ? "fixed" : "inherit"}` }}
      >
        <div className={classes.logo}>
          <Link className={classes.image} to="/"></Link>
        </div>
        <div className={classes.search}>
          <div className={classes.searchItems}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes.searchIcon}
              type="submit"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <form onSubmit={inputHandler}>
              <input
                type="search"
                className={classes.input}
                placeholder="Quick Search"
                ref={valu}
              />
            </form>
          </div>
        </div>
        <div className={classes.links}>
          <ul className={classes.list}>
            <Link to="/" className={`${classes.list} ${classes.hidden1}`}>
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
              onClick={() => {
                setShow((prevState) => !prevState);
                console.log("Kliknuto!");
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Link
              to="/browse-movies/0/2160p/All/A/Dsc/Title"
              className={`${classes.list} ${classes.hidden} ${classes.fourk}`}
            >
              4K
            </Link>
            <Link to="/trending-movies" className={classes.hidden}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
                onClick={() => console.log("Mahir")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </Link>
            <Link to="/browse-movies" className={classes.hidden}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </Link>
            <Link
              to={currentUser ? `/user/${name}` : "/create-user"}
              className={classes.hidden}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${classes.hiddenSearchIcon} ${classes.hidden}`}
                onClick={() => {
                  if (!currentUser) {
                    <Redirect to="/" />;
                  }
                }}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/browse-movies/0/2160p/All/A/Dsc/Title"
              className={`${classes.list} ${classes.hidden1}`}
            >
              4K
            </Link>
            <Link
              to="/trending-movies"
              className={`${classes.list} ${classes.hidden1}`}
            >
              Trending
            </Link>
            <Link
              to="/browse-movies"
              className={`${classes.list} ${classes.hidden1}`}
            >
              Browse Movies
            </Link>
            {!currentUser ? (
              <button
                className={`${classes.button} ${classes.hidden1}`}
                onClick={() => {
                  setViewLogin(true);
                  setTrigger("login");
                }}
              >
                Login
              </button>
            ) : (
              ""
            )}
            {currentUser && currentUser.email ? (
              <Link
                className={`${classes.button} ${classes.hidden1}`}
                to={`/user/${currentUser.email.slice(0, index)}`}
              >
                {currentUser.email.slice(0, index)}
              </Link>
            ) : (
              ""
            )}
            {currentUser ? (
              <button
                className={`${classes.button} ${classes.hidden1}`}
                onClick={() => {
                  signOut(auth);
                }}
              >
                Logout
              </button>
            ) : (
              ""
            )}
            {!currentUser && (
              <button
                className={`${classes.button} ${classes.hidden1}`}
                onClick={() => {
                  setViewLogin(true);
                  setTrigger("register");
                }}
              >
                Register
              </button>
            )}
            {viewLogin && window.screen.width > 980 && (
              <RegisterOverlay
                loginClose={() => {
                  setViewLogin(false);
                }}
                close={() => setViewLogin(false)}
                trigger={trigger}
              />
            )}
          </ul>
          {currentUser ? (
            <a
              onClick={() => {
                history.push("/bookmarks", {
                  userId: currentUser ? currentUser.uid : "",
                });
              }}
              className={`${classes.list} ${classes.bookmark} ${classes.hidden1}`}
            >
              Bookmarks
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      {show === true && (
        <section className={`${searchClasses.search}`}>
          <div className={searchClasses.box}>
            <form className={searchClasses.form} onSubmit={submitHandler}>
              <label
                htmlFor="search-term"
                className={`${searchClasses.label} ${searchClasses.searchTerm}`}
              >
                Search Term:
              </label>
              <div className={searchClasses.searchBar}>
                <div className={searchClasses.term}>
                  <input
                    type="text"
                    id="search-term"
                    name="search-term"
                    className={searchClasses.input}
                    ref={selectedTerm}
                  />
                </div>
                <button htmlFor="submit" className={searchClasses.button}>
                  Search
                </button>
              </div>
              <div className={searchClasses.quality}>
                <div className={searchClasses.item}>
                  <label htmlFor="quality" className={searchClasses.label}>
                    Quality
                  </label>
                  <select
                    name="quality"
                    id="quality"
                    className={searchClasses.select}
                    ref={selectedQuality}
                  >
                    <option value="All">All</option>
                    <option value="720p">720p</option>
                    <option value="1080p">1080p</option>
                    <option value="2160p">2160p</option>
                    <option value="3D">3D</option>
                  </select>
                </div>
                <div className={searchClasses.item}>
                  <label htmlFor="Genre" className={searchClasses.label}>
                    Genre
                  </label>
                  <select
                    name="genre"
                    id="genre"
                    className={searchClasses.select}
                    ref={selectedGenre}
                  >
                    {genres.map((genre, index) => {
                      return (
                        <option value={`${genre}`} key={index}>
                          {genre}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={searchClasses.item}>
                  <label htmlFor="Rating" className={searchClasses.label}>
                    Rating
                  </label>
                  <select
                    name="Rating"
                    id="Rating"
                    className={searchClasses.select}
                    ref={selectedRating}
                  >
                    {ratings.map((rating, index) => {
                      return (
                        <option value={`${rating}`} key={index}>
                          {rating}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={searchClasses.item}>
                  <label htmlFor="Year" className={searchClasses.label}>
                    Sort By
                  </label>
                  <select
                    name="Year"
                    id="Year"
                    className={searchClasses.select}
                    ref={selectedYear}
                  >
                    {years.map((year, index) => {
                      return (
                        <option value={`${year}`} key={index}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={searchClasses.item}>
                  <label htmlFor="Order" className={searchClasses.label}>
                    Order
                  </label>
                  <select
                    name="Order"
                    id="Order"
                    className={searchClasses.select}
                    ref={selectedOrderBy}
                  >
                    {orders.map((order, index) => {
                      return (
                        <option value={`${order}`} key={index}>
                          {order}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </Fragment>
  );
};
export default Header;
