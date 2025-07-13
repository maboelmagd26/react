import React, { useState } from "react";

export default function ListSate({ toggle }) {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState("");
  function addNewFriend(e) {
    e.preventDefault();
    setFriends((prevFrindList) => [...prevFrindList, newFriend]);
    setNewFriend("");
  }
  function removeFriend() {
    setFriends(friends.filter((f) => !f.startsWith("m")));
  }
  function updateFriend() {
    setFriends(friends.map((f) => (f === "Ahmed" ? "Mohamed" : f)));
  }
  return (
    <div>
      <h2>Friends List</h2>
      <input
        key={toggle ? "light" : "dark"}
        type="text"
        value={newFriend.trim()}
        onChange={(e) => setNewFriend(e.target.value)}
      />
      <button onClick={addNewFriend}>add New friend</button>
      <button onClick={updateFriend}>update Friend</button>
      <button onClick={removeFriend}>Remove</button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
