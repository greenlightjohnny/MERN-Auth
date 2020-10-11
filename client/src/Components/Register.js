import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthServices";
import Message from "../Components/Message";

import Styles from "./login.module.scss";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
  let timeID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ///Use the auth service
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timeID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <div className={Styles.box}>
          <input
            type="text"
            required
            value={user.username}
            name="username"
            onChange={onChange}
            className={Styles.input}
          />
          <label htmlFor="username" className={Styles.label}>
            Username:
          </label>
        </div>
        <div className={Styles.box}>
          <input
            type="password"
            required
            name="password"
            value={user.password}
            onChange={onChange}
            className={Styles.input}
          />
          <label htmlFor="password" className={Styles.label}>
            Password:
          </label>
        </div>

        <div className={Styles.box}>
          <input
            type="text"
            required
            name="role"
            value={user.role}
            onChange={onChange}
            className={Styles.input}
          />
          <label htmlFor="role" className={Styles.label}>
            Role: admin or user
          </label>
        </div>

        <button className={Styles.btn} type="submit">
          Register
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Register;
