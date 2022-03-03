import classes from "./Main.module.css";
import { Link } from "react-router-dom";

const Main = (props) => {
  if (props.data) {
    console.log(props.data);
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
            <Link className={classes.link} to={`/browse-movies`}>
              Link
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
