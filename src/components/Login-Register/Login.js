import classes from "./Login.module.css";

import React from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Uspjesno submitovano!");
  };
  //STAVITI REQUIRED NA USERNAME I PASSWORD!
  return (
    <div className={classes.main}>
      <h3 className={classes.errorMessage}>
        Error: Incorrect username or password
      </h3>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.username}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#000000"
            viewBox="0 0 256 256"
            className={classes.icon}
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="96"
              r="64"
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="16"
            ></circle>
            <path
              d="M31,216a112,112,0,0,1,194,0"
              fill="none"
              stroke="#000000"
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
            placeholder="Username or Email"
          />
        </div>
        <div className={classes.username}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#000000"
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
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></rect>
            <path
              d="M92,88V52a36,36,0,0,1,72,0V88"
              fill="none"
              stroke="#000000"
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
          />
        </div>
        <button type="submit" className={classes.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
