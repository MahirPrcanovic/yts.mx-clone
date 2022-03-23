import useFetch from "../../hooks/useFetch";
import classes from "./Main.module.css";
import MovieDetail from "../Global/MovieDetail";
const Main = () => {
  // const [data, setData] = useState(null);
  const data = useFetch({
    url: "https://yts.mx/api/v2/list_movies.json?page=",
    page: 1,
  });
  console.log(data);
  const movies = [];
  if (data && data.data.movies) {
    for (let i = 0; i < data.data.movies.length; i++) {
      movies.push(data.data.movies[i]);
    }
  }
  return (
    <section className={classes.main}>
      <div className={classes.title}>
        <h1>24h YIFY Trending Movies</h1>
      </div>
      <div className={classes.centre}>
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
    </section>
  );
};
export default Main;
