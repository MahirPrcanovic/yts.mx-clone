import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
const Main = () => {
  let rand = Math.floor(1 + Math.random() * (20 - 1));
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${rand}`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  rand = Math.floor(1 + Math.random() * (20 - 1));
  const rand2 = Math.floor(1 + Math.random() * (20 - 1));
  const rand3 = Math.floor(1 + Math.random() * (20 - 1));
  const rand4 = Math.floor(1 + Math.random() * (20 - 1));
  // console.log(rand);
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.text}>
          <div className={classes.title}>
            <h1>Download YTS YIFY movies: HD smallest size</h1>
          </div>
          <div className={classes.description}>
            Welcome to the official YTS.MX (.LT) website.Here you can browse and
            download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
            quality, all at the smallest file size. YTS Movies Torrents.
          </div>
          <div className={classes.link}>
            <Link
              to="/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies"
              className={classes.linkTxt}
            >
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </Link>
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
          {data && (
            <MovieDetail
              image={data.data.movies[rand].medium_cover_image}
              genre={data.data.movies[rand].genres}
              title={data.data.movies[rand].title}
              year={data.data.movies[rand].year}
              rating={data.data.movies[rand].rating}
            />
          )}
          {data && (
            <MovieDetail
              image={data.data.movies[rand2].medium_cover_image}
              genre={data.data.movies[rand2].genres}
              title={data.data.movies[rand2].title}
              year={data.data.movies[rand2].year}
              rating={data.data.movies[rand2].rating}
            />
          )}

          {data && (
            <MovieDetail
              image={data.data.movies[rand3].medium_cover_image}
              genre={data.data.movies[rand3].genres}
              title={data.data.movies[rand3].title}
              year={data.data.movies[rand3].year}
              rating={data.data.movies[rand3].rating}
            />
          )}

          {data && (
            <MovieDetail
              image={data.data.movies[rand4].medium_cover_image}
              genre={data.data.movies[rand4].genres}
              title={data.data.movies[rand4].title}
              year={data.data.movies[rand4].year}
              rating={data.data.movies[rand4].rating}
            />
          )}
        </div>
      </div>
      <div className={classes.latest}></div>
    </Fragment>
  );
};

export default Main;
