import React, { useContext, useEffect, useState } from "react";
import classes from "./BookmarkMain.module.css";
import { doc, query } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";
import { LoginContext } from "../../Context/AuthContext";
import { collection } from "firebase/firestore";
import { useLocation } from "react-router-dom";
const BookmarkMain = () => {
  // let niz;
  const location = useLocation();
  console.log(location.state.userId);
  const id = location.state.userId;
  const [bookMarks, setBookMarks] = useState([]);
  let niz = [];
  const currentUser = useContext(LoginContext);
  let doc2;
  if (currentUser) {
    doc2 = doc(db, `users`, `${currentUser ? currentUser.uid : ""}`);
    console.log(doc2);
    console.log(currentUser.uid);
  }
  useEffect(() => {
    const getData = async () => {
      const query = await getDoc(doc(db, "users", `${id}`));
      const data = query.data();
      console.log(data);
      setBookMarks(data.bookmarks);
    };
    getData();
  }, []);
  console.log(bookMarks[0]);
  console.log(bookMarks.length);
  return (
    <section className={classes.container}>
      <div className={classes.main}>
        {bookMarks.length > 0 &&
          bookMarks.map((book) => {
            return <div className={classes.tank}>{book.movieId}</div>;
          })}
      </div>
    </section>
  );
};

export default BookmarkMain;
