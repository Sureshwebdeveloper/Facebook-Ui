import React from "react";
import Sidemenu from "./components/Sidemenu";
import FriendRequest from "./components/FriendRequest";
import Createstory from "./components/Createstory";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
