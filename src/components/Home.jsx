import React from "react";
import Createstory from "./Createstory";
import Sidemenu from "./Sidemenu";
import FriendRequest from "./FriendRequest";
import Postcard from "./Postcard";
import Mainsection from "./Mainsection";
import Post from "./Post";

const Home = () => {
  return (
    <main className="flex items-center flex-row justify-start h-fit ">
      <Sidemenu />
      <Mainsection />
      <FriendRequest />
      {/* <Post /> */}
    </main>
  );
};

export default Home;
