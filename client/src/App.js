import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );
  console.log(user);
  console.log(isAuthenticated);
  return (
    <div className="App">
      <p>Wooo</p>
    </div>
  );
}

export default App;
