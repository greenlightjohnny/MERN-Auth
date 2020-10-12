import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Hero from "./images/hero.svg";
import Circle from "./images/circle.svg";
import Styles from "./main.module.scss";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import Nav from "./Components/Navbar";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className={Styles.mine}>
      <div className={Styles.hero}>
        <img className={Styles.heroimg} src={Hero} alt="shape"></img>
        <img className={Styles.circle} src={Circle} alt="shape"></img>
      </div>
      <Router>
        <Nav />
        <Route exact path="/" component={Home}></Route>
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/register" component={Register} />

        <PrivateRoute
          path="/todos"
          roles={["user", "admin"]}
          component={Todos}
        />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      </Router>
    </div>
  );
}

export default App;
