//DEPENDENCIES
import React, {useState} from "react";

//STYLES
import { Form } from "../styles";

/***** NAVIGATION *****/
export default function FriendForm(props) {
  
const [newFriend, setNewFriend] = useState({name: "", email: "", age: ""});

const submitFriend = e => {
    e.preventDefault();
}

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
