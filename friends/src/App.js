//DEPENDENCIES
import React from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

//STYLES
import { Container } from "./styles";

/***** APP *****/
export default function App() {
  return (
    <Container>

      <Navigation />

      <Switch>
        <PrivateRoute path="/protected">
          <Route exact path="/protected" component={FriendList} />
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
      
    </Container>
  );
}
