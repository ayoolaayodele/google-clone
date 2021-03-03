import React from "react";

import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import About from "./components/About";
import Store from "./components/Store";
import Gmail from "./components/Gmail";
import Images from "./components/Images";
import All from "./components/All";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/store'>
            <Store />
          </Route>
          <Route path='/gmail'>
            <Gmail />
          </Route>
          <Route path='/images'>
            <Images />
          </Route>
          <Route path='/all'>
            <All />
          </Route>
          <Route path='/settings'>
            <All />
          </Route>
          <Route path='/tools'>
            <All />
          </Route>
          <Route path='/news'>
            <All />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
