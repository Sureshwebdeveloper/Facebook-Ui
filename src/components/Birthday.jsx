import React from "react";
import gift from "../assets/utilites/gift-c.png";

const Birthday = () => {
  return (
    <section className="w-full pb-6 ">
      <div className="flex justify-start items-center w-full pt-6">
        <h2 className="text-[rgb(101,103,107)] text-lg ml-9 font-bold">
          Birthdays
        </h2>
      </div>
      <div className="flex  ml-6 hover:bg-[#ccc] cursor-pointer pb-3 rounded-md">
        <img src={gift} alt="git-icon" className="rounded-full mt-4 h-10 ml-2" />
        <p className="text-[rgb(84,84,84)] max-w-48 ml-3 mt-4">
          <span className="font-bold text-md text-black">Ronaldo</span> and
          <span className="font-bold text-md text-black"> 8others</span> have
          birthdays today
        </p>
      </div>
    </section>
  );
};

export default Birthday;
