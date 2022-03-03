import classes from "./SearchBar.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
// const languages = [
//   "All",
//   "English",
//   "Foreign",
//   "French (1694)",
//   "Japanese (1590)",
//   "Italian (900)",
//   "Spanish (818)",
//   "German (682)",
//   "Chinese (593)",
//   "Korean (561)",
//   "Cantonese (486)",
//   "Hindi (360)",
//   "Russian (249",
//   "Swedish (246)",
//   "Portuguese (191)",
//   "Polish (174)",
//   "Thai (120)",
//   "Danish (118)",
//   "Norwegian (85)",
//   "Dutch (82)",
//   "Tamil (67)",
//   "Vietnamese (66)",
//   "Telugu (65)",
//   "Finnish (58)",
//   "Czech (57)",
//   "Turkish (42)",
//   "Indonesian (39)",
//   "Persian (30)",
//   "Hungarian (27)",
//   "Tangalog (27)",
//   "Greek (27)",
//   "Arabic (23)",
//   "Hebrew (20)",
//   "Estonian (18)",
//   "Romanian (18)",
//   "Bangla (18)",
//   "Urdu (15)",
//   "Malay (13)",
//   "Malayam (13)",
//   "Icelandic (12)",
//   "Serbian (11)",
//   "Ukranian (10)",
//   "xx (9)",
//   "Catalan (9)",
//   "Slovak (8)",
//   "Punjabi (7)",
//   "Afrikaans (6)",
//   "Wolof (5)",
//   "Georgian (5)",
//   "Kannada (4)",
//   "Marathi (4)",
//   "Tibetan (4)",
//   "Latvian (4)",
//   "Basque (4)",
//   "Amharic (3)",
//   "Latin (3)",
//   "Galician (3)",
//   "Pashto (2)",
//   "Akan (2)",
//   "Armenian (2)",
//   "Lithuanian (2)",
//   "Swahili (2)",
//   "Norwegian Bokmai (2)",
//   "Bosnian (2)",
//   "Mongolian (2)",
//   "Somali(2)",
//   "Slovenian (1)",
//   "Kazakh (1)",
//   "Maltese (1)",
//   "Welsh (1)",
//   "Kurdish (1)",
//   "Igbo (1)",
//   "Zulu (1)",
//   "Croatian (1)",
//   "Irish (1)",
//   "Belarusian (1)",
//   "Ganda (1)",
//   "Southern Sotho (1)",
//   "Inuktitut (1)",
//   "Maori (1)",
//   "Khmer (1)",
//   "Azerbaijani (1)",
//   "Macedonian (1)",
//   "Haitan Creole (1)",
//   "Serbo-Croatian (1)",
//   "Kyrgyz (1)",
//   "Ossetic (1)",
//   "Abkhazian (1)",
//   "Luxembourgish (1)",
//   "Yiddish (1)",
//   "Afar (1)",
// ];
const orders = [
  "Title",
  "Year",
  "Rating",
  "Peers",
  "Seeds",
  "Download Count",
  "Like count",
  "Date Added",
];
const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-show",
  "History",
  "Horror",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];
const ratings = ["All", "9+", "8+", "7+", "6+", "5+", "4+", "3+", "2+", "1+"];
const years = ["Dsc", "Asc"];
// const movies = [];
const SearchBar = (props) => {
  const selectedQuality = useRef();
  const selectedTerm = useRef();
  const selectedGenre = useRef();
  const selectedRating = useRef();
  const selectedYear = useRef();
  // const selectedLanguage = useRef();
  const selectedOrderBy = useRef();
  const history = useHistory();
  let quality, term, genre, rating, year, language, orderBy;
  //https://yts.mx/api/v2/list_movies.json?query_term=spider-man ZA SEARCHANJE
  //Pomocu ovog koristiti i napraviti search
  const submitHandler = (e) => {
    e.preventDefault();
    quality = selectedQuality.current.value;
    term = selectedTerm.current.value;
    genre = selectedGenre.current.value;
    rating = selectedRating.current.value;
    year = selectedYear.current.value;
    // language = selectedLanguage.current.value;
    orderBy = selectedOrderBy.current.value;
    history.replace(
      `/browse-movies/${
        term.trim().length === 0 ? "0" : term.trim()
      }/${quality}/${genre}/${rating.slice(0, 1)}/${year}/${orderBy}`
    );
  };
  return (
    <section className={classes.search}>
      <div className={classes.box}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label
            htmlFor="search-term"
            className={`${classes.label} ${classes.searchTerm}`}
          >
            Search Term:
          </label>
          <div className={classes.searchBar}>
            <div className={classes.term}>
              <input
                type="text"
                id="search-term"
                name="search-term"
                className={classes.input}
                ref={selectedTerm}
              />
            </div>
            <button htmlFor="submit" className={classes.button}>
              Search
            </button>
          </div>
          <div className={classes.quality}>
            <div className={classes.item}>
              <label htmlFor="quality" className={classes.label}>
                Quality
              </label>
              <select
                name="quality"
                id="quality"
                className={classes.select}
                ref={selectedQuality}
              >
                <option value="All">All</option>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
                <option value="2160p">2160p</option>
                <option value="3D">3D</option>
              </select>
            </div>
            <div className={classes.item}>
              <label htmlFor="Genre" className={classes.label}>
                Genre
              </label>
              <select
                name="genre"
                id="genre"
                className={classes.select}
                ref={selectedGenre}
              >
                {genres.map((genre, index) => {
                  return (
                    <option value={`${genre}`} key={index}>
                      {genre}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes.item}>
              <label htmlFor="Rating" className={classes.label}>
                Rating
              </label>
              <select
                name="Rating"
                id="Rating"
                className={classes.select}
                ref={selectedRating}
              >
                {ratings.map((rating, index) => {
                  return (
                    <option value={`${rating}`} key={index}>
                      {rating}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes.item}>
              <label htmlFor="Year" className={classes.label}>
                Sort By
              </label>
              <select
                name="Year"
                id="Year"
                className={classes.select}
                ref={selectedYear}
              >
                {years.map((year, index) => {
                  return (
                    <option value={`${year}`} key={index}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <div className={classes.item}>
              <label htmlFor="Language" className={classes.label}>
                Language
              </label>
              <select
                name="Language"
                id="Language"
                className={classes.select}
                ref={selectedLanguage}
              >
                {languages.map((language, index) => {
                  return (
                    <option value={`${language}`} key={index}>
                      {language}
                    </option>
                  );
                })}
              </select>
            </div> */}
            <div className={classes.item}>
              <label htmlFor="Order" className={classes.label}>
                Order
              </label>
              <select
                name="Order"
                id="Order"
                className={classes.select}
                ref={selectedOrderBy}
              >
                {orders.map((order, index) => {
                  return (
                    <option value={`${order}`} key={index}>
                      {order}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default SearchBar;
