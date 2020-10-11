import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Nav from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </Router>
  );
}

export default App;
