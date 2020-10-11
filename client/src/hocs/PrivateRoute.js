import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

//// Components needs to be capitalized in React???
const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (!isAuthenticated) {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }
          if (!roles.includes(user.roles)) {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }
          return <Component {...props} />;
        }}
      />
    </div>
  );
};

export default PrivateRoute;
