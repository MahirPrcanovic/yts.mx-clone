import classes from "./Main.module.css";

const Main = () => {
  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <div className={classes.overview}>
          <div className={classes.picture}>
            <div className={classes.block}></div>
            <button className={classes.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>{" "}
              Download
            </button>
            <button className={classes.button}>Watch Now</button>
          </div>
          <div className={classes.text}>
            <div className={classes.items}>
              <h1 className={classes.title}>Title</h1>
              <div className={classes.year}>
                <h2>Year</h2>
                <h2>Genre</h2>
              </div>
              <div className={classes.available}>
                <div className={classes.buttons}>
                  <h2 className={classes.availableText}>Available in:</h2>
                  <button>720p.WEB</button>
                  <button>1080p.WEB</button>
                  <button>2160p.WEB</button>
                </div>
                <h3>
                  WEB: same quality as BluRay, but ripped earlier from a
                  streaming service
                </h3>
              </div>

              <button className={classes.download}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>{" "}
                Download Subtitles
              </button>
              <div className={classes.review}>
                <div className={classes.item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>Number</h3>
                </div>
                <div className={classes.item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>Critics</h3>
                </div>
                <div className={classes.item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>Audience</h3>
                </div>
                <div className={classes.item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>Imdb</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.similar}></div>
        </div>
        <div className={classes.trailer}></div>
        <div className={classes.crew}></div>
        <div className={classes.specs}></div>
        <div className={classes.comments}></div>
      </div>
    </section>
  );
};
export default Main;
