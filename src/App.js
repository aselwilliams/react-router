//react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
//navbar
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/book/:id" children={<Person />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
