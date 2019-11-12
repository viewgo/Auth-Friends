//DEPENDENCIES
import React from "react";

//STYLES
import { Card, CardInfo, CardButtons } from "../styles";

/***** NAVIGATION *****/
export default function Friend(props) {
  const friend = props.friend;

  return (
    <Card>
      <CardInfo>
        <h3>{friend.name}</h3>
        <span>{friend.age} years old</span>
        <span>{friend.email}</span>
      </CardInfo>
      <CardButtons>
      ✘
      </CardButtons>
    </Card>
  );
}
