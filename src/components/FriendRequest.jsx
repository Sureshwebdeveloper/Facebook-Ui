import React from "react";
import user from "../assets/users/jack.png";
import user2 from "../assets/users/tom.png";
import user3 from "../assets/users/cameron.png";
import Birthday from "./Birthday";
import Contact from "./Contact";
const FriendRequest = () => {
  return (
    <section className="w-full h-screen hidden lg:flex xl:flex 2xl:flex justify-end items-center  scroll-smooth overflow-y-scroll  z-20">
      <div className="w-1/4 lg:1/6  fixed h-full  flex-col flex items-center   bg-[#f0f2f5] mt-24 scroll-smooth overflow-x-hidden overflow-y-scroll ">
        <div className="flex justify-around items-center w-full pt-6 mx-auto ">
          <h2 className="text-[rgb(101,103,107)] text-lg font-bold">
            Friend requests
          </h2>
          <h1 className="text-[rgb(0,100,209)] text-md px-2 cursor-pointer hover:bg-[#ccc] ml-5">
            See All
          </h1>
        </div>
        <div className="hover:bg-[#ccc] pt-1 pb-4 px-5 w-full  rounded-md lg:mr-20 xl:mr-24 2xl:mr-26">
          <div className="flex justify-center items-center -mt-4 mx-auto">
            <div className="flex justify-center mt-8 xl:ml-7">
              <img
                src={user}
                alt=""
                className="h-14 rounded-full lg:ml-5 lg-h-12 xl:ml-10 2xl:ml-14"
              />
            </div>
            <div className="flex flex-col mt-4 mx-auto items-center mr-16 lg:mr-10">
              <strong className="font-semibold text-lg mt-3 ml-4 lg:text-base lg:ml-2 lg:w-full xl:w-full ">
                Jacky john
                <span className="ml-4 lg:ml-2  font-medium text-sm text-[rgb(101,103,107)]">
                  3d
                </span>
              </strong>
              <div className="flex flex-row mr-20 lg:mt-3">
                <img
                  src={user2}
                  alt="user_image"
                  className="rounded-full h-6 lg:h-5 bg-slate-100"
                />
                <img
                  src={user3}
                  alt="user_image"
                  className="rounded-full h-6 lg:h-5 -ml-2 bg-black"
                />
              </div>
              <p className="absolute mt-10 ml-24 text-md lg:ml-20 font-medium text-[rgb(101,103,107)] xl:mb-3 lg:pt-1">
                2 mutual Friends
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4  mx-auto">
            <div className="flex  items-start justify-center gap-x-5 ml-5">
              <button className="bg-[rgb(8,102,255)] text-white py-2 px-4 rounded-md">
                Confirm
              </button>
              <button className="bg-[rgb(228,230,235)] text-black py-2 px-4 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>
        <Birthday />
        <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>
        <Contact />
      </div>
    </section>
  );
};

export default FriendRequest;
