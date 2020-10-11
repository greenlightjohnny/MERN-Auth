import React, { useState, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../Services/TodoService";
import { AuthContext } from "../Context/AuthContext";
import e from "express";

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
    e.preventDefault();
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
        });
      }
    });
  };

  return (
    <div>
      <ul>
        {todos.map((i) => {
          return <TodoItem key={todo_id} todo={i} />;
        })}
      </ul>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="todo">Add item</label>
        <button type="submit">Submit</button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Todos;
