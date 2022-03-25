import React from "react";
import classes from "./CreateUserMain.module.css";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useState, useContext } from "react";
import { LoginContext } from "../../Context/AuthContext";
import { setDoc, collection, doc } from "firebase/firestore";
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "../Global/Loading";
const CreateUserMain = () => {
  const currentUser = useContext(LoginContext);
  const [registering, setReggistering] = useState(false);
  const [error, setError] = useState("");
  let user;
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    setReggistering(true);
    if (password.current.value === passwordConfirm.current.value) {
      try {
        user = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        ).then((userData) => {
          const date = new Date().toLocaleDateString("bos");
          console.log(date);
          setDoc(doc(db, "users", `${userData.user.uid}`), {
            id: userData.user.uid,
            email: userData.user.email,
            dateJoined: date,
            lastSeen: date,
          });
          setReggistering(false);
        });
      } catch (error) {
        setReggistering(false);
        console.log(error.message);
        setError(error.message);
      }
    } else {
      setReggistering(false);
      setError("Passwords do not match!");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {registering ? (
          <Loading />
        ) : (
          <form onSubmit={submitHandler} className={classes.form}>
            <h1>Register an account</h1>
            <div className={classes.username}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#ffffff"
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
                  stroke="#ffff"
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
                  stroke="#fff"
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
                  stroke="#fff"
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
            <button type="submit" className={classes.button}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateUserMain;
