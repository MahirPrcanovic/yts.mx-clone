import React, { useContext, useEffect, useState } from "react";
import classes from "./BookmarkMain.module.css";
import { doc, query, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";
import { LoginContext } from "../../Context/AuthContext";
import { collection } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteField } from "firebase/firestore";
const BookmarkMain = () => {
  // let niz;
  const history = useHistory();
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
  const removeDoc = async (movieId) => {
    let deleteDoc = doc(db, "users", `${id}`);
    await updateDoc(deleteDoc, {
      bookmarks: bookMarks.filter((book) => book.movieId !== movieId),
    });
    setBookMarks(bookMarks.filter((book) => book.movieId !== movieId));
  };
  console.log(bookMarks[0]);
  console.log(bookMarks.length);
  return (
    <section className={classes.container}>
      <div className={classes.main}>
        {bookMarks.length > 0 &&
          bookMarks.map((book, index) => {
            return (
              <div>
                <div
                  onClick={() => {
                    history.push(`/movies/${book.slug}`, {
                      searchQuery: book.title,
                    });
                  }}
                  className={classes.tank}
                  style={{
                    backgroundImage: `url(${book.image})`,
                    backgroundPosition: "centre",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <button
                  className={classes.removeButton}
                  onClick={() => {
                    removeDoc(book.movieId);
                  }}
                >
                  Remove Bookmark
                </button>
                <div className={classes.text}>
                  {book.title.split("-").join(" ")}
                </div>
                <div className={classes.text}>{book.year}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default BookmarkMain;
