import React from "react";
import { useEffect } from "react";

const Home = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      
      history.push("/");
      
    }
  }, [history]);

  return (
    <div>
      <h1>Home</h1>

      <h1>Home</h1>
    </div>
  );
};

export default Home;
