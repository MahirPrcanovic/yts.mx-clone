import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/mahir">
        <h1>Mahir</h1>
      </Route>
    </Switch>
  );
}

export default App;
