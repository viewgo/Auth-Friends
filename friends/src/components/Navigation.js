import React from "react";
import {Link} from "react-router-dom";

export default function FriendList() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/protected">Friends List</Link>
    </>
  );
}
