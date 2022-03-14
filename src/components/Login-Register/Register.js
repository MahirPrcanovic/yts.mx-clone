import classes from "./Register.module.css";

import React from "react";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Uspjesno submitano!");
  };
  return (
    <div className={classes.main}>
      <h3 className={classes.errorMessage}>
        Error : The e-mail field is required
      </h3>
      <form onClick={submitHandler} className={classes.form}>
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
            <polyline
              points="224 56 128 144 32 56"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></polyline>
            <path
              d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <line
              x1="110.5"
              y1="128"
              x2="34.5"
              y2="197.7"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="221.5"
              y1="197.7"
              x2="145.5"
              y2="128"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
          <input
            autoComplete="off"
            type="text"
            name="username"
            id="name"
            className={classes.input}
            placeholder="E-Mail (no confirmation needed)"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></rect>
            <path
              d="M92,88V52a36,36,0,0,1,72,0V88"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <circle cx="128" cy="152" r="12"></circle>
          </svg>
          <input
            autoComplete="off"
            type="password"
            name="username"
            id="name"
            className={classes.input}
            placeholder="Password"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></rect>
            <path
              d="M92,88V52a36,36,0,0,1,72,0V88"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <circle cx="128" cy="152" r="12"></circle>
          </svg>
          <input
            autoComplete="off"
            type="password"
            name="username"
            id="name"
            className={classes.input}
            placeholder="Confirm password"
          />
        </div>
        <h3 className={classes.errorMessage}>
          Error: The e-mail field is required
        </h3>
        <button type="submit" className={classes.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
