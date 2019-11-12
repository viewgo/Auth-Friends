//DEPENDENCIES
import React, { useState } from "react";
import axios from "axios";

//STYLES
import { Form } from "../styles";

//axios with authorization token
const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

/***** NAVIGATION *****/
export default function FriendForm(props) {
  const [newFriend, setNewFriend] = useState({ name: "", email: "", age: "" });

  const submitFriend = e => {
    e.preventDefault();

    console.log("submitted", newFriend);
    console.log("age is: ", Number.isInteger(newFriend.age));
    if (
      newFriend.name !== "" &&
      newFriend.email !== "" &&
      newFriend.age !== "" &&
      !isNaN(newFriend.age)
    ) {
      axiosWithAuth()
        .post(`http://localhost:5000/api/friends`, newFriend)
        .then(response => {
          console.log("post response", response);
        })
        .catch(error => {
          console.log("error", error);
        });

      props.setTrigger(!props.trigger);
      setNewFriend({ name: "", email: "", age: "" });
    } else {
      alert("Enter proper values");
    }
  };

  //Input change handler
  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form>
      <h3>Add Friend</h3>

      <form onSubmit={submitFriend}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </Form>
  );
}
