import classes from "./Register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import React from "react";
import { useRef, useState } from "react";
const Register = (props) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (password.current.value === passwordConfirm.current.value) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        {
          props.loginClose();
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
      setLoading(false);
    } else {
      setError("Passwords do not match!");
      setLoading(false);
    }
  };
  return (
    <div className={classes.main}>
      {error !== " " && <h3 className={classes.errorMessage}>{error}</h3>}
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
            placeholder="Email"
            ref={email}
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
            <circle cx="128" cy="152" r="12"></circle>
          </svg>
          <input
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            className={classes.input}
            placeholder="Password"
            ref={password}
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
            <circle cx="128" cy="152" r="12"></circle>
          </svg>
          <input
            autoComplete="off"
            type="password"
            name="password-confirm"
            id="password-confirm"
            className={classes.input}
            placeholder="Confirm password"
            ref={passwordConfirm}
          />
        </div>
        <h3 className={classes.errorMessage}>{error}</h3>
        <button type="submit" className={classes.button} disabled={loading}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
