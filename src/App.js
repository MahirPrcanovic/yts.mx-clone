import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import BrowseMovies from "./pages/BrowseMovies";
import SearchNotFoundError from "./components/ErrorBoundary/SearchNotFoundError";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/browse-movies">
        <SearchNotFoundError>
          <BrowseMovies />
        </SearchNotFoundError>
      </Route>
    </Switch>
  );
}

export default App;
