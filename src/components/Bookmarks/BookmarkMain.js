import React, { useContext, useEffect, useState } from "react";
import classes from "./BookmarkMain.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";
import { LoginContext } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const BookmarkMain = () => {
  const history = useHistory();
  const location = useLocation();
  let id;
  if (location && location.state && location.state.userId) {
    id = location.state.userId;
  }
  const [bookMarks, setBookMarks] = useState([]);
  let niz = [];
  const currentUser = useContext(LoginContext);
  let doc2;
  if (currentUser) {
    doc2 = doc(db, `users`, `${currentUser ? currentUser.uid : ""}`);
  }
  useEffect(() => {
    const getData = async () => {
      const query = await getDoc(doc(db, "users", `${id}`));
      const data = query.data();
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
  if (!bookMarks) {
  }
  return (
    <section className={classes.container}>
      {!currentUser && (
        <div className={`${classes.error}`}>
          You are not singed in to see bookmarks!
        </div>
      )}
      {!bookMarks ||
        (bookMarks.length === 0 && (
          <>
            <div>
              <h2 className={`${classes.error}`}>No bookmarks added !</h2>
              <h2 className={`${classes.error}`}>
                Bookmark a film to view it up here!
              </h2>
              <div className={classes.picture}></div>
            </div>
          </>
        ))}
      <div className={classes.main}>
        {currentUser &&
          bookMarks &&
          bookMarks.length > 0 &&
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
