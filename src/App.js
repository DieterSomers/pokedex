import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokegrid from "./Pokegrid.js";
import Pokedetail from "./Pokedetail.js";

function App() {
  let pokemon = "none";

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:pokemon">
            <h1>Pokedetail</h1>
            <Pokedetail />
          </Route>
          <Route exact path="/">
            <h1>Pokedex</h1>
            <Pokegrid />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
