import React from "react";
import classes from "./UserMain.module.css";
const UserMain = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.userName}>
          <h1>mahir123</h1>
          {<button className={classes.button}>Profile Settings</button>}
        </div>
        <div className={classes.userInfo}>
          <div className={classes.userText}></div>
          <div className={classes.userPhoto}>
            <div
              style={{
                backgroundImage: `url$`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserMain;
