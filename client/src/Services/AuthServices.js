/// Sends requests yay! To clean up components.

export default {
  login: (user) => {
    return fetch("/user/login", {
      method: post,
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  register: (user) => {
    return fetch("/user/register", {
      method: post,
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  logout: () => {
    return fetch("/user/logout").then(res);
  },
};
