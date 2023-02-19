import { useLocation } from "react-router-dom";
import React from "react";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home Page</h1>
      <p1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        vitae eum veritatis molestiae sint magni at velit, soluta ratione
        voluptatem voluptates molestias voluptate facere cupiditate praesentium
        accusantium. Quis, voluptatibus exercitationem.
      </p1>
    </div>
  );
};

export default Home;
