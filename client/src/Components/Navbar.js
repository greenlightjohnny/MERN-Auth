import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthServices";
import { AuthContext } from "../Context/AuthContext";
import Styles from "./navbar.module.scss";
import Mylogo from "../images/mylogo.png";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const logoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className={Styles.list}>Home</li>
        </Link>
        <Link to="/login">
          <li className={Styles.list}>Login</li>
        </Link>
        <Link to="/register">
          <li className={Styles.list}>Register</li>
        </Link>
      </>
    );
  };

  const authNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className={Styles.list}>Home</li>
        </Link>
        <Link to="/todos">
          <li className={Styles.list}>Todo</li>
        </Link>
        {user.role === "admin" ? (
          <Link to="/admin">
            <li className={Styles.list}>Admin</li>
          </Link>
        ) : null}

        <button type="button" className={Styles.btn} onClick={logoutHandler}>
          Logout
        </button>
      </>
    );
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles.container}>
        <Link to="/">
          <div className={Styles.logocon}>
            <img src={Mylogo} alt="shape"></img>
          </div>
        </Link>

        <div>
          <ul>{!isAuthenticated ? unauthNavbar() : authNavbar()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
