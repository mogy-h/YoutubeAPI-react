import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
>>>>>>> df36e25df4913dc12faff75150928b1d470a9960
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </Router>
=======
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="search" component={Search} />
          <Route exact path="watch" component={Watch} />
        </Switch>
      </Router>
    </div>
>>>>>>> df36e25df4913dc12faff75150928b1d470a9960
  );
}

export default App;
