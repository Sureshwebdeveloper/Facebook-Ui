import React from "react";
import universal from "../assets/utilites/universal-icon.png";
import post1 from "../assets/users/hero.jpg";
import like from "../assets/utilites/like-btn.png";
import comment from "../assets/utilites/comment.png";
import share from "../assets/utilites/share.png";
import close from "../assets/utilites/close.png";
import dots from "../assets/utilites/dots-menu.png";
import love_icon from "../assets/utilites/heart-c.png";
import like_icon from "../assets/utilites/like-c.png";
import comment_fill from "../assets/utilites/comment-fill.png";
import share_fill from "../assets/utilites/share-fill.png";
import userprofile from "../assets/users/gerard.png";
import currentpost from "../assets/users/vinicius.jpg";
import seconduser from "../assets/users/cameron.png";
import messi from "../assets/users/messi.png"


const ErrorHandleComponent = ({ handleReaction }) => {
  const randomnum = Math.floor(Math.random() * 10);
  const randomnum2 = Math.ceil(Math.random() * 20);
  return (
      <div className="flex items-center md:mx-auto  justify-center w-1/2 flex-col bg-[#f0f2f5] mx-auto ">
        <div className="flex items-center flex-col justify-center bg-white rounded-lg shadow-xl mb-6 z-10   pb-8 px-6 sm:px-16">
          <div className="flex items-center  ml-3 sm:ml-1">
            <img
              src={userprofile}
              alt="userprofileimage"
              className="rounded-full h-11 ml-3 sm:h-9 sm:ml-2"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <h2 className="font-bold relative ml-2">gerard</h2>
              </div>
              <p className="flex text-gray-400">
              {randomnum > 5 ? "Recommendded" : " Sposnsard Post"}
                <img src={universal} className="h-5 sm:h-4  ml-8 mt-[2px]" />
              </p>
            </div>
            <div
              className=
                "flex items-center justify-around flex-row mb-9 ml-14 space-x-6 space-y-2"
            >
              <img src={dots} alt="" className="h-6 mt-3" />
              <img src={close} alt="" className="h-5" />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
          <h3 className="text-blue-600  font-bold mb-2">#MyNewFriend 🥳😍</h3>
            <img
              src={currentpost}
              alt="model_Female_photo"
              className="object-cover rounded-md w-80"
            />
            <div className="pt-[1px] w-full my-3 mx-auto  bg-slate-300"></div>
          </div>
          {/* like count section */}
          <div className="space-x-1 flex  justify-evenly items-center">
            <div className="flex items-center flex-row justify- w-full mr-20">
              <img src={like_icon} alt="" className="object-cover h-4" />
              <img src={love_icon} alt="" className="object-cover h-4" />
              {randomnum}K
            </div>
            <div className="flex items-center">
              805
              <img
                src={comment_fill}
                alt="comment_icon"
                className="object-cover h-5 mr-3"
              />
              400
              <img
                src={share_fill}
                alt="comment_icon"
                className="object-cover h-5"
              />
            </div>
          </div>
          <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>

          {/* Like,comment,Share section */}
          <div className="space-x-5 pt-5 flex items-center -mt-4 ">
            <button className=" flex ">
              <img src={like} alt="" className="h-6" onClick={handleReaction} />
              <span>Like</span>
            </button>
            <button className="flex">
              <img src={comment} alt="" className="h-6" />
              Comment
            </button>
            <button className="flex">
              <img src={share} alt="" className="h-6" /> Share
            </button>
          </div>
          <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>
        </div>
        
        {/* //////////////////////// 2nd Card ////////////////////////////////// */}


        <div className="flex items-center flex-col justify-center bg-white rounded-lg shadow-xl mb-6 z-10   pb-8 px-6 sm:px-16">
          <div className="flex items-center  ml-3 sm:ml-1">
            <img
              src={seconduser}
              alt="userprofileimage"
              className="rounded-full h-11 ml-3 sm:h-9 sm:ml-2"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <h2 className="font-bold relative ml-2">cameron</h2>
              </div>
              <p className="flex text-gray-400">
              {randomnum2 >= 10 ? " Recommendded" : "Sposnsard Post"}
                <img src={universal} className="h-5 sm:h-4  ml-8 mt-[2px]" />
              </p>
            </div>
            <div
              className=
                "flex items-center justify-around flex-row mb-9 ml-14 space-x-6 space-y-2"
            >
              <img src={dots} alt="" className="h-6 mt-3" />
              <img src={close} alt="" className="h-5" />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
          <h3 className="text-blue-600 font-bold mb-2"> #topscorer</h3>
            <img
              src={messi}
              alt="messi_football_player_image"
              className="object-cover rounded-md w-80"
            />
            <div className="pt-[1px] w-full my-3 mx-auto  bg-slate-300"></div>
          </div>
          {/* like count section */}
          <div className="space-x-1 flex  justify-evenly items-center">
            <div className="flex items-center flex-row justify- w-full mr-20">
              <img src={like_icon} alt="" className="object-cover h-4" />
              <img src={love_icon} alt="" className="object-cover h-4" />
              {randomnum}K
            </div>
            <div className="flex items-center">
              805
              <img
                src={comment_fill}
                alt="comment_icon"
                className="object-cover h-5 mr-3"
              />
              400
              <img
                src={share_fill}
                alt="comment_icon"
                className="object-cover h-5"
              />
            </div>
          </div>
          <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>

          {/* Like,comment,Share section */}
          <div className="space-x-5 pt-5 flex items-center -mt-4 ">
            <button className=" flex ">
              <img src={like} alt="" className="h-6" onClick={handleReaction} />
              <span>Like</span>
            </button>
            <button className="flex">
              <img src={comment} alt="" className="h-6" />
              Comment
            </button>
            <button className="flex">
              <img src={share} alt="" className="h-6" /> Share
            </button>
          </div>
          <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>
        </div>
      </div>
  );
};

export default ErrorHandleComponent;
