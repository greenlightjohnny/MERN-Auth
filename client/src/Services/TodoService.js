import Todo from "../../../models/Todo";

export default {
  getTodos: () => {
    return fetch("/user/todos").then((res) => {
      if (res.status != 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "No auth" }, msgError: true };
      }
    });
  },

  postTodo: () => {
    return fetch("/user/todo", {
      method: "post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status != 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "No auth", msgError: true } };
      }
    });
  },
};
