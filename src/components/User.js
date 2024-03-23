import { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  return (
    <div className="font-bold">
      <h3>Name : {name}</h3>
      <h3>Contact : {contact}</h3>

      <h3>Location : {location}</h3>
    </div>
  );
};

export default User;
