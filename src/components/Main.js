import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <div className={classes.txt}>
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <div className={classes.paragraph}>
            <p>
              Welcome to the official YTS.MX(.LT) website. Here you can browse
              and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
              quality, all at the smallest file size. YTS Movies Torrent.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.popular}></div>
    </div>
  );
};

export default Main;
