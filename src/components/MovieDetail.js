import classes from "./MovieDetail.module.css";
const MovieDetail = (props) => {
  console.log(props.title, props.year, props.rating, props.image, props.genre);
  return <div className={classes.block}>{/* <img src={props.image} /> */}</div>;
};
export default MovieDetail;
