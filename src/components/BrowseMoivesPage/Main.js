import classes from "./Main.module.css";
import { Link, useHistory } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import MovieDetail from "../Global/MovieDetail";

const Main = () => {
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
    if (+name < 1977 && +name > 0) {
      setPageNumber(name ? +name : 1);
      setActivePage(name ? +name - 1 : 1);
    } else if (+name === 1977) {
      setPageNumber(1970);
      setActivePage(1977);
      setActiveIndex(7);
    } else {
      setActiveIndex(0);
      funkcija();
    }
    if (+name > 1970 && +name < 1977) {
      setPageNumber(1970);
      setActivePage(name ? +name : 1);
      const index = +name - 1970;
      setActiveIndex(index);
    }
    // eslint-disable-next-line
  }, []);
  console.log(pageNumber);
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
  if (data) {
    console.log(data);
  }
  const movies = [];
  if (data) {
    for (let i = 0; i < 20; i++) {
      movies.push(data.data.movies[i]);
    }
  }

  return (
    <section className={classes.main}>
      <div className={classes.pagination}>
        <div className={classes.srce}>
          <div className={classes.paginationTitle}>
            <h2>
              <span className={classes.number}>39,468 </span>YIFY Movies found
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
              to={`/browse-movies?page=${pageNumber - 1}`}
              className={`${classes.link} ${classes.previous}`}
              onClick={() => {
                setPageNumber((prevNumber) => {
                  setActivePage(pageNumber - 1);
                  setActiveIndex((prevIndex) => {
                    if (prevIndex > 0) {
                      return prevIndex - 1;
                    } else {
                      return prevIndex;
                    }
                  });
                  if (prevNumber >= 2) {
                    return prevNumber - 1;
                  } else {
                    return prevNumber;
                  }
                });
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
              to={`/browse-movies?page=${pageNumber + 1}`}
              className={classes.link}
              onClick={() => {
                setPageNumber((prevNumber) => {
                  if (prevNumber === 1970) {
                    return;
                  } else {
                    return prevNumber + 1;
                  }
                });
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
      <div></div>
    </section>
  );
};
export default Main;
