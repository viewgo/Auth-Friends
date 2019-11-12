//DEPENDENCIES
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDefaultWatermarks } from "istanbul-lib-report";

//COMPONENTS
import Friend from "./Friend";
import FriendForm from "./FriendForm";

//STYLES
import { List, FriendListRow } from "../styles";

//axios with authorization token
const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

/***** FRIENDS LIST *****/
export default function FriendList() {
  const [data, setData] = useState();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log("CHANGE TRIGGERED!");
    getData();
  }, [trigger]);

  const getData = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        console.log("response", response);
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  const deleteFriend = (e, friend) => {
    e.preventDefault();
    console.log("delete clicked");

    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${friend.id}`)
      .then(response => {
        console.log("response after delete", response);
      })
      .catch(error => {
        console.log("error", error);
      });

    setTrigger(!trigger);
  };

  if (data) {
    return (
      <>
        <h2>Friends</h2>

        <FriendListRow>
          <List>
            {data.map(friend => (
              <Friend
                key={friend.id}
                friend={friend}
                deleteFriend={deleteFriend}
              />
            ))}
          </List>

          <FriendForm trigger={trigger} setTrigger={setTrigger} />
        </FriendListRow>
      </>
    );
  } else {
    return (
      <>
        <h2>Friend List</h2>
        <p>Loading...</p>
      </>
    );
  }
}
