import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <div className="App">
//       <Navigation />

//       <Route path="/login" component={Login} />
//       <Route exact path="/" component={Dashboard} />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path="/protected">
          <Route exact path="/protected" component={FriendList} />
        </PrivateRoute>
        <Route path="/login" component={Login} />
          <Route component={Login} />
      </Switch>
    </div>
  );
}
