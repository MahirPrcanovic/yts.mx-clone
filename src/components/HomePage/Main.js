import classes from "./Main.module.css";
import { Fragment, useContext, useState } from "react";
import MovieDetail from "../Global/MovieDetail";
import useFetch from "../../hooks/useFetch";
import { LoginContext } from "../../Context/AuthContext";
const Main = () => {
  const currentUser = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  let rand = Math.floor(1 + Math.random() * (1970 - 1));
  const data = useFetch({
    url: "https://yts.mx/api/v2/list_movies.json?page=",
    page: rand,
  });
  let movieData = [];
  if (data) {
    for (let i = 0; i < 4; i++) {
      movieData.push(data.data.movies[i]);
    }
    //console.log(movieData);
  }
  return (
    <Fragment>
      {
        <div className={classes.main}>
          <div className={classes.text}>
            <div className={classes.title}>
              <h1>Download YTS YIFY movies: HD smallest size</h1>
            </div>
            <div className={classes.description}>
              Welcome to the official YTS.MX (.LT) website.Here you can browse
              and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
              quality, all at the smallest file size. YTS Movies Torrents.
            </div>
            <div className={classes.link}>
              <h2 className={classes.linkTxt}>
                IMPORTANT - YTS.MX is the only new official domain for YIFY
                Movies
              </h2>
            </div>
            <div className={classes.popularText}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.icon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h2> Popular Downloads</h2>
            </div>
          </div>
          <div className={classes.popular}>
            {data &&
              movieData.length !== 0 &&
              movieData.map((movie) => {
                return (
                  <MovieDetail
                    slug={movie.slug}
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
      }
    </Fragment>
  );
};

export default Main;
