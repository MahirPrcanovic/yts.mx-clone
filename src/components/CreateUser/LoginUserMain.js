import React from "react";
import classes from "./LoginUser.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { auth } from "../../firebase";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";
import { LoginContext } from "../../Context/AuthContext";
import Loading from "../Global/Loading";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginUser = () => {
  const history = useHistory();
  const currentUser = useContext(LoginContext);
  const [loggedIn, setLoggedIn] = useState(currentUser ? true : false);
  const [loggingIn, setLoggingIn] = useState(false);
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(" ");
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then((userData) => {
        setLoggedIn(true);
        const date = new Date().toLocaleDateString("bos");
        //console.log(date);
        updateDoc(doc(db, "users", `${userData.user.uid}`), {
          lastSeen: date,
        });
        setLoggingIn(false);
        history.push("/");
      });
    } catch (error) {
      setLoggingIn(false);
      setLoggedIn(false);
      // console.log(error);
      setError("Email or password are incorrect!");
    }
  };
  return (
    <div className={classes.main}>
      {loggingIn ? (
        <Loading />
      ) : (
        <form onSubmit={submitHandler} className={classes.form}>
          <h1>LOGIN</h1>
          {error !== " " && <h3 className={classes.errorMessage}>{error}</h3>}
          <div className={classes.username}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#fff"
              viewBox="0 0 256 256"
              className={classes.icon}
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="128"
                cy="96"
                r="64"
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="16"
              ></circle>
              <path
                d="M31,216a112,112,0,0,1,194,0"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
            <input
              autoComplete="off"
              type="text"
              name="username"
              id="name"
              className={classes.input}
              placeholder="Email"
              required
              ref={email}
            />
          </div>
          <div className={classes.username}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#fff"
              viewBox="0 0 256 256"
              className={classes.icon}
            >
              <rect width="256" height="256" fill="none"></rect>
              <rect
                x="40"
                y="88"
                width="176"
                height="128"
                rx="8"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></rect>
              <path
                d="M92,88V52a36,36,0,0,1,72,0V88"
                fill="none"
                stroke="#ffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              className={classes.input}
              placeholder="Password"
              required
              ref={password}
            />
          </div>
          <button type="submit" className={classes.button}>
            Login
          </button>
        </form>
      )}
      <h3 className={classes.linkText}>
        or{" "}
        <Link to="/create-user" className={classes.link}>
          Register
        </Link>{" "}
        a new account.
      </h3>
    </div>
  );
};

export default LoginUser;
