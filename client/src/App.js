import React from 'react';
import Search from "./pages/Search/index";
import Saved from './pages/Saved/index';
import Nav from "./components/Nav/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Nav />
    //   <Search />
    // </div>

    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
