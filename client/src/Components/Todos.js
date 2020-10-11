import React, { useState, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../Services/TodoService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
import Styles from "./todos.module.scss";

const Todos = () => {
  const [todo, setTodo] = useState({ name: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const handleChange = (e) => {
    setTodo({ name: e.target.value });
  };

  const resetForm = () => {
    setTodo({ name: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    TodoService.postTodo(todo).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ///if it was submitted successfully, fetch updated list again from server
        TodoService.getTodos().then((getData) => {
          setTodos(getData.todos);
          setMessage(message);
        });
      } else if (message.msgBody === "UnAuthorized") {
        ///will fire if JWT is expired, set global context
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.isAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <div className={Styles.container2}>
      <ul>
        {todos.map((i) => {
          return <TodoItem key={i._id} todo={i} />;
        })}
      </ul>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className={Styles.box}>
          <input
            type="text"
            name="todo"
            required
            value={todo.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="todo">Add item</label>
        </div>
        <button className={Styles.btn} type="submit">
          Submit
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Todos;
