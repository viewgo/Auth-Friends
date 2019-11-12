//DEPENDENCIES
import React from "react";
import {Link} from "react-router-dom";

//STYLES
import {Nav} from "../styles";

/***** NAVIGATION *****/
export default function Navigation() {
  return (
    <Nav>
      <Link to="/login">Login</Link>
      <Link to="/protected">Friends List</Link>
    </Nav>
  );
}
