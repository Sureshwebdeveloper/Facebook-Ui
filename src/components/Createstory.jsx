import React from "react";
import hero from "../assets/users/hero.jpg";
import profile from "../assets/users/megan.png";
import add from "../assets/utilites/add.png";
import Postcard from "./Postcard";
import livevideo from "../assets/utilites/live.png";
import photo from "../assets/utilites/gallery.png";
import activity from "../assets/utilites/feelings.png";
import Post from "./Post";

const Createstory = () => {
  return (
    <main className="w-full h-fit lg:-mt-48 xl:-mt-48  2xl:-mt-48 sm:ml-10 md:ml-10 mt-20 bg-[#f0f2f5]">
      <div className="flex items-center justify-start w-full lg:ml-[100px] lg:mt-16 xl:ml-[270px] xl:mt-16 2xl:ml-[270px] bg-[#f0f2f5]">
        <div className="h-52 w-32 md:w-fit  bg-black rounded-2xl m-4  flex items-center justify-center">
          <img
            src={hero}
            alt=""
            className="object-cover h-full rounded-2xl md:w-full md:-mr-3 z-0"
          />
          <p className="-ml-32 md:w-full md:-ml-[167px] md:p-0 mx-auto z-10 w-fit mt-36 p-2 md:mt-40 md:rounded-b-xl text-center bg-[#ccc] rounded opacity-95">
            <span className="opacity-100 w-fit md:ml-[6px]">
              Share Your Music Love 😍
            </span>
          </p>
        </div>
        <div className="h-52 w-fit  bg-black rounded-2xl m-2  flex items-start justify-center ">
          <div>
            <img
              src={profile}
              alt="user-profile"
              className="md:w-52 md:h-36 object-fill  w-full rounded-t-xl"
            />
            <div className="bg-[rgb(255,255,255)] pb-3 md:pb-1 md:rounded-b-xl mx-auto rounded">
              <div className="flex items-center justify-center flex-col">
                <img
                  src={add}
                  alt="Plus-(add)-icon"
                  className="h-7 md:my-1 my-3 mx-auto bg-blue-600  rounded-full"
                />
                <p>Create story</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ml-[160px] 2xl:w-full xl:ml-[380px] lg:ml-[110px] lg:w-[44vw]  xl:w-[38vw] xl:mr-14 md:w-fit md:px-10 bg-white shadow-lg py-3  mt-5 mb-9 rounded-md grid place-content-center md:ml-4 sm:mx-auto sm:px-0 sm:w-fit" >
        <div className="flex items-center">
          <img
            src={profile}
            alt="profile picture"
            className="object-cover rounded-full h-11"
          />
          <input
            type="text"
            placeholder="What's on your mind, Megan ?"
            className="rounded-full py-[5px] px-24 ml-5 md:px-14 placeholder:-mr-10 bg-gray-200 sm:w-[300px]"
          />
        </div>
        <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>
        <div className="flex items-center justify-center pt-2">
          <div className="flex items-center space-x-3 mr-4 sm:mr-1 sm:space-x-0">
            <img
              src={livevideo}
              alt="Livevideo-icon"
              className="object-cover h-6 "
            />
            <h3>Live video</h3>
          </div>
          <div className="flex items-center space-x-3 mr-4 sm:mr-1 sm:space-x-0">
            <img
              src={photo}
              alt="Photo/Video-icon"
              className="object-cover h-6 ml-2"
            />
            <h3>Photo/video</h3>
          </div>
          <div className="flex items-center space-x-2 ml-3 sm:mr-1 sm:space-x-0">
            <img
              src={activity}
              alt="Feeling/activity-icon"
              className="object-cover h-6"
            />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
      <Postcard />
    </main>
  );
};

export default Createstory;
