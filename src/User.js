import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>This is {name}'s Page</h1>
      <p1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        consectetur, deleniti distinctio libero cupiditate ullam porro officiis
        velit temporibus blanditiis quia quo facilis molestiae. Itaque commodi
        odit officia illum eos.
      </p1>
    </div>
  );
};
export default User;
