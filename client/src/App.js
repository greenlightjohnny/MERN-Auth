import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import PrivateRoute from "./hocs/PrivateRoute";
import Nav from "./Components/Navbar";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
    </Router>
  );
}

export default App;
