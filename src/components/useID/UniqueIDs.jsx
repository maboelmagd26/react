import React, { useId } from "react";

const UniqueIDs = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-pass`}>password</label>
      <input type="password" name="pass" id={`${id}-pass`} />
      <br />
      <label htmlFor={`${id}-email`}>email</label>
      <input type="email" name="email" id={`${id}-email`} />
    </div>
  );
};

export default UniqueIDs;
