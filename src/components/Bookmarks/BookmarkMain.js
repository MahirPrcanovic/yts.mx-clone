import React, { useContext, useEffect, useState } from "react";
import classes from "./BookmarkMain.module.css";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";
import { LoginContext } from "../../Context/AuthContext";
const BookmarkMain = () => {
  // let niz;
  const [bookMarks, setBookMarks] = useState([]);
  const currentUser = useContext(LoginContext);
  let doc2;
  //    const doc2 = doc(db, "users", `${currentUser ? currentUser.uid : ""}`);
  //  console.log(getDoc(doc2).then((res) => console.log(res.data())));
  if (currentUser) {
    doc2 = doc(db, "users", `${currentUser ? currentUser.uid : ""}`);
  }
  useEffect(() => {
    const getBookmarks = async () => {
      const data = await getDoc(doc2);
      console.log(data.data());
      setBookMarks(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getBookmarks();
  }, [doc2]);
  console.log(bookMarks);
  return <section className={classes.container}>Mahir</section>;
};

export default BookmarkMain;
