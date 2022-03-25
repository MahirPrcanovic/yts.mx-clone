import React, { useContext } from "react";
import classes from "./UserMain.module.css";
import { LoginContext } from "../../Context/AuthContext";
import image from "../../images/default_avatar.webp";
import { Redirect } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
const UserMain = () => {
  const currentUser = useContext(LoginContext);
  let index = currentUser ? currentUser.email.indexOf("@") : "";
  if (currentUser) {
    console.log(currentUser);
  }
  if (!currentUser) {
    <Redirect to="/" />;
  }
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.userText}>
          <h3>{currentUser ? currentUser.email.slice(0, index) : ""}</h3>
          <button
            className={`${classes.button} ${classes.hidden1}`}
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </button>
        </div>
        <div className={classes.userInfo}>
          <div className={classes.text}>
            <h2>Statistics</h2>
            <div className={classes.div}>
              <div>
                <p>Joined: </p>
                <p>{currentUser ? currentUser.metadata.creationTime : ""}</p>
              </div>
              <div>
                <p>Last Seen: </p>
                <p>{currentUser ? currentUser.metadata.lastSignInTime : ""}</p>
              </div>
              <div>
                <p>User Class: </p>
                <p>User</p>
              </div>
            </div>
          </div>
          <div className={classes.image}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserMain;
