import React from 'react';
import './App.css';
import CounterPage from "./pages/CounterPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "./pages/Profile"

function App() {
  return (
       <Router>
      <Link to="/profile">profile</Link>
      <br/> <br/>
      <Link to="/counter">Counter</Link>
          <Switch>
          <Route path="/profile" exact>
            <Profile />
        </Route>
        <Route path="/counter" exact>
            <CounterPage/>
        </Route>
          </Switch>
        </Router>
  );
}

export default App;
