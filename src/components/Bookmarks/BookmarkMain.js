import React, { useContext, useEffect, useState } from "react";
import classes from "./BookmarkMain.module.css";
import { doc, query } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";
import { LoginContext } from "../../Context/AuthContext";
import { collection } from "firebase/firestore";
const BookmarkMain = () => {
  // let niz;
  const [bookMarks, setBookMarks] = useState([]);
  let niz = [];
  const currentUser = useContext(LoginContext);
  let doc2;
  // let niz;
  //    const doc2 = doc(db, "users", `${currentUser ? currentUser.uid : ""}`);
  //  console.log(getDoc(doc2).then((res) => console.log(res.data())));
  if (currentUser) {
    doc2 = doc(db, "users", `${currentUser ? currentUser.uid : ""}`);
  }
  const getData = async () => {
    const querySnapshot = await getDoc(
      doc(db, "users", `${currentUser ? currentUser.uid : ""}`)
    );
    console.log(querySnapshot.data().bookmarks);
    querySnapshot.data().bookmarks.forEach((d) => {
      console.log(d.movieId);
      niz.push(d.movieId);
    });
  };
  getData();
  console.log(niz);
  return <section className={classes.container}></section>;
};

export default BookmarkMain;
