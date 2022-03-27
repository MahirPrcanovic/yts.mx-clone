import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import BrowseMovies from "./pages/BrowseMovies";
import SearchNotFoundError from "./components/ErrorBoundary/SearchNotFoundError";
import TrendingMovies from "./pages/TrendingMovies";
import Movies from "./pages/Movies";
import User from "./pages/User";
import Bookmarks from "./pages/Bookmarks";
import CreateUser from "./pages/CreateUser";
import LoginUser from "./pages/LoginUser";
import Contact from "./pages/Contact";
import ErrorBoundary from "./components/ErrorBoundary/SearchNotFoundError";
function App() {
  //       /browse-movies/:a/:b/:c/:e/:f/:g
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route
        path="/browse-movies/:term/:quality/:genre/:rating/:sort/:order"
        exact
      >
        <SearchNotFoundError>
          <BrowseMovies />
        </SearchNotFoundError>
      </Route>
      <Route path="/browse-movies" exact>
        <SearchNotFoundError>
          <BrowseMovies />
        </SearchNotFoundError>
      </Route>
      <Route path="/trending-movies">
        <TrendingMovies />
      </Route>
      <Route path="/movies/:title">
        <Movies />
      </Route>
      <Route path="/user/:username">
        <User />
      </Route>
      <Route path="/bookmarks">
        <Bookmarks />
      </Route>
      <Route path="/create-user">
        <CreateUser />
      </Route>
      <Route path="/login-user">
        <LoginUser />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <ErrorBoundary />
      </Route>
    </Switch>
  );
}

export default App;
