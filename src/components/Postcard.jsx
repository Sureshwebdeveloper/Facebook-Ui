import React, { useState, useEffect } from "react";
import userprofile from "../assets/users/gerard.png";
import universal from "../assets/utilites/universal-icon.png";
import post1 from "../assets/users/hero.jpg";
import EmojHandler from "./EmojHandler";
import like from "../assets/utilites/like-btn.png";
import comment from "../assets/utilites/comment.png";
import share from "../assets/utilites/share.png";
import close from "../assets/utilites/close.png";
import dots from "../assets/utilites/dots-menu.png";
import axios from "axios";
import love_icon from "../assets/utilites/heart-c.png";
import like_icon from "../assets/utilites/like-c.png";
import comment_fill from "../assets/utilites/comment-fill.png";
import share_fill from "../assets/utilites/share-fill.png";
import Post from "./Post";
import ErrorHandleComponent from "./ErrorHandleComponent";

const Postcard = () => {
  const [datas, setData] = useState([]);

  const randomnumber = Math.ceil(Math.random() * 20);
  useEffect(() => {
    function fakedata() {
      axios
        .get("https://randomuser.me/api/?results=20")
        .then((response) => setData(response.data.results))
        .catch((err) => console.log(err));
    }
    fakedata();
  }, []);
  const [emoji, setEmoj] = useState(true);

  const handleReaction = () => {
    setEmoj(!emoji);
  };

  return (
    // <section className="absolute h-auto z-10 ">
    <section className="w-[100%]  h-auto z-10 absolute left-0 bg-[#f0f2f5] overflow-x-hidden">
      {datas.length <= 1 ? (
        <ErrorHandleComponent handleReaction={handleReaction} />
      ) : (
        <div className="flex items-center md:mx-auto  justify-center w-1/2 flex-col bg-[#f0f2f5] mx-auto ">
          {datas.map((result, index) => (
            <div key={index}>
              <div className="flex items-center flex-col justify-center bg-white rounded-lg shadow-xl mb-6 z-10   pb-8 px-6 sm:px-16">
                <div className="flex items-center  ml-3 sm:ml-1">
                  <img
                    src={result.picture.medium}
                    alt="userprofileimage"
                    className="rounded-full h-11 ml-3 sm:h-9 sm:ml-2"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                      <h2 className="font-bold relative ml-2">
                        {result.name.first}
                      </h2>
                    </div>
                    <p className="flex text-gray-400">
                      {index % 2 == 0 ? "Recommendded" : " Sposnsard"}
                      <img
                        src={universal}
                        className="h-5 sm:h-4  ml-8 mt-[2px]"
                      />
                    </p>
                  </div>
                  <div
                    className={
                      index % 2 == 0
                        ? "flex items-center justify-around flex-row mb-9 ml-14 space-x-6 space-y-2"
                        : "flex items-center justify-around flex-row mb-9 ml-28 space-x-6 space-y-2"
                    }
                  >
                    <img src={dots} alt="" className="h-6 mt-3" />
                    <img src={close} alt="" className="h-5" />
                  </div>
                </div>
                  <Post />
              </div>
            </div>
          ))}
        </div>
      )}
      <Post handleReaction={handleReaction} />
      <EmojHandler emoji={emoji} handleReaction={handleReaction} />
    </section>
  );
};

export default Postcard;
