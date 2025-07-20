import React, { useContext } from "react";
import { UserContext } from "../../store/UserContext";
//ToDo : 1. consume it using useContext Hook
export default function UpdateUser() {
  const { updateUserName, user, inputValue, setInputValue } =
    useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      updateUserName(inputValue);
    }
  };
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <h1>Update User Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
}
