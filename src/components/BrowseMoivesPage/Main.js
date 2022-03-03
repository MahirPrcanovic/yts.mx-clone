import classes from "./Main.module.css";
import { Link, useHistory } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import MovieDetail from "../Global/MovieDetail";
import Footer from "../Global/Footer";
const Main = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const history = useHistory();
  const funkcija = useCallback(() => {
    history.push("/browse-movies?page=1");
  }, [history]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("page");
    if (+name < 1978 && +name > 0) {
      setPageNumber(name ? +name : 1);
      setActivePage(name ? +name : 1);
      setActiveIndex(0);
    }
    if (+name > 1977 || +name < 1) {
      setPageNumber(1);
      setActivePage(1);
      setActiveIndex(0);
      funkcija();
    }
    if (+name === 1977) {
      setPageNumber(1970);
      setActivePage(1977);
      setActiveIndex(7);
    }
    if (+name > 1970 && +name < 1977) {
      const index = +name - 1970;
      setActiveIndex(index);
      setPageNumber(1970);
      setActivePage(+name);
    }
    // eslint-disable-next-line
  }, []);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${activePage}`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
    // eslint-disable-next-line
  }, [activePage]);
  const movies = [];
  if (props.data) {
    console.log(props.data);
  }
  if (props.data !== null) {
    //ERROR PAGE STAVITI (KAD SE NE NADE FILM NA SERCH STRANICA SE KRASHA)
    console.log(props.data.data.movies.length === undefined);
    if (props.data.data.movies !== undefined) {
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
            <Link
              to="/browse-movies?page=1"
              className={classes.link}
              onClick={() => {
                setPageNumber(1);
                setActivePage(1);
                setActiveIndex(0);
              }}
            >
              First
            </Link>
            <Link
              to={`/browse-movies?page=${
                activePage - 1 <= 0 ? 1 : activePage - 1
              }`}
              className={`${classes.link} ${classes.previous}`}
              onClick={() => {
                if (activeIndex === 0 && pageNumber > 1) {
                  setPageNumber((page) => page - 8);
                  setActivePage((pageNumber) => pageNumber - 1);
                  setActiveIndex(7);
                } else {
                  // setPageNumber((page) => page - 1);
                  setActiveIndex((index) => {
                    if (index === 0) return 0;
                    else return index - 1;
                  });
                  setActivePage((page) => page - 1);
                }
              }}
            >
              Previous
            </Link>
            {numbers.map((number, index) => {
              return (
                <Link
                  to={`/browse-movies?page=${pageNumber + number}`}
                  className={`${classes.link} ${
                    activeIndex === number ? classes.active : " "
                  }`}
                  key={index}
                  onClick={() => {
                    setActivePage(pageNumber + number);
                    setActiveIndex(number);
                  }}
                >
                  {pageNumber + number}
                </Link>
              );
            })}
            <Link
              to={`/browse-movies?page=${
                activePage !== 1977 ? activePage + 1 : activePage
              }`}
              className={`${classes.link}`}
              onClick={() => {
                if (activeIndex === 7 && activePage !== 1977) {
                  setActiveIndex(0);
                  setActivePage((page) => page + 1);
                  setPageNumber((page) => page + 8);
                } else if (activeIndex < 7 && activePage !== 1977) {
                  setActiveIndex((index) => index + 1);
                  setActivePage((page) => page + 1);
                }
                if (activeIndex === 7 && activePage === 1977) {
                  return;
                }
              }}
            >
              Next
            </Link>
            <Link
              to="/browse-movies?page=1977"
              className={classes.link}
              onClick={() => {
                setPageNumber(1970);
                setActivePage(1977);
                setActiveIndex(7);
              }}
            >
              Last
            </Link>
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
      <div className={`${classes.pagination} ${classes.padding}`}>
        <div className={classes.srce}>
          <div className={classes.pages}>
            <Link
              to="/browse-movies?page=1"
              className={classes.link}
              onClick={() => {
                setPageNumber(1);
                setActivePage(1);
                setActiveIndex(0);
              }}
            >
              First
            </Link>
            <Link
              to={`/browse-movies?page=${
                activePage - 1 <= 0 ? 1 : activePage - 1
              }`}
              className={`${classes.link} ${classes.previous}`}
              onClick={() => {
                if (activeIndex === 0 && pageNumber > 1) {
                  setPageNumber((page) => page - 8);
                  setActivePage((pageNumber) => pageNumber - 1);
                  setActiveIndex(7);
                } else {
                  // setPageNumber((page) => page - 1);
                  setActiveIndex((index) => {
                    if (index === 0) return 0;
                    else return index - 1;
                  });
                  setActivePage((page) => page - 1);
                }
              }}
            >
              Previous
            </Link>
            {numbers.map((number, index) => {
              return (
                <Link
                  to={`/browse-movies?page=${pageNumber + number}`}
                  className={`${classes.link} ${
                    activeIndex === number ? classes.active : " "
                  }`}
                  key={index}
                  onClick={() => {
                    setActivePage(pageNumber + number);
                    setActiveIndex(number);
                  }}
                >
                  {pageNumber + number}
                </Link>
              );
            })}
            <Link
              to={`/browse-movies?page=${
                activePage !== 1977 ? activePage + 1 : activePage
              }`}
              className={`${classes.link}`}
              onClick={() => {
                if (activeIndex === 7 && activePage !== 1977) {
                  setActiveIndex(0);
                  setActivePage((page) => page + 1);
                  setPageNumber((page) => page + 8);
                } else if (activeIndex < 7 && activePage !== 1977) {
                  setActiveIndex((index) => index + 1);
                  setActivePage((page) => page + 1);
                }
                if (activeIndex === 7 && activePage === 1977) {
                  return;
                }
              }}
            >
              Next
            </Link>
            <Link
              to="/browse-movies?page=1977"
              className={classes.link}
              onClick={() => {
                setPageNumber(1970);
                setActivePage(1977);
                setActiveIndex(7);
              }}
            >
              Last
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Main;
