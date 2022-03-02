import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../Global/MovieDetail";
import { useLocation } from "react-router-dom";

const Main = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${pageNumber}`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
    // eslint-disable-next-line
  }, [pageNumber]);
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
            {/* <button
              onClick={() => {
                setPageNumber((prevPageNumber) => prevPageNumber + 1);
              }}
            >
              {pageNumber}
            </button> */}
            <Link
              to="/browse-movies?page=1"
              className={classes.link}
              onClick={() => setPageNumber(1)}
            >
              First
            </Link>
            <Link
              to={`/browse-movies?page=${pageNumber}`}
              className={classes.link}
              onClick={() =>
                setPageNumber((prevNumber) => {
                  if (prevNumber >= 2) {
                    return prevNumber - 1;
                  } else return prevNumber;
                })
              }
            >
              Previous
            </Link>
            {numbers.map((number, index) => {
              return (
                <Link
                  to={`/browse-movies?page=${pageNumber + number}`}
                  className={classes.link}
                  key={index}
                  onClick={() =>
                    setPageNumber((prevNumber) => {
                      if ((prevNumber = 1977)) {
                        return prevNumber;
                      } else {
                        return prevNumber + 1;
                      }
                    })
                  }
                >
                  {pageNumber + number}
                </Link>
              );
            })}
            <Link
              to={`/browse-movies?page=${pageNumber + 1}`}
              className={classes.link}
              onClick={() =>
                setPageNumber((prevNumber) => {
                  if (prevNumber <= 1969) {
                    return prevNumber + 1;
                  } else return prevNumber;
                })
              }
            >
              Next
            </Link>
            <Link
              to="/browse-movies?page=1977"
              className={classes.link}
              onClick={() => setPageNumber(1970)}
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
