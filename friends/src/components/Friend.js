//DEPENDENCIES
import React from "react";

//STYLES
import { Card, CardInfo, CardButtons, DeleteButton } from "../styles";

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
        <DeleteButton onClick={e => props.deleteFriend(e, friend)}>
          ✘
        </DeleteButton>
      </CardButtons>
    </Card>
  );
}
