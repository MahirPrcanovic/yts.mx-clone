import classes from "./MovieDetail.module.css";
const MovieDetail = (props) => {
  console.log(props.title, props.year, props.rating, props.image, props.genre);
  console.log(typeof props.image);
  return (
    <div className={classes.movie}>
      <div
        className={classes.block}
        style={{
          backgroundImage: `url("${props.image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <h4>{props.title}</h4>
      <p>{props.year}</p>
    </div>
  );
};
export default MovieDetail;
