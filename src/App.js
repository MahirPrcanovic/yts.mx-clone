import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import Header from "./components/Global/Header";
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/mahir">
        <h1>Mahir</h1>
      </Route>
    </Switch>
  );
}

export default App;
