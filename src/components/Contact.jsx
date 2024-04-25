import React, { useState } from "react";
import dotmenu from "../assets/utilites/dots-menu.png";
import searchicon from "../assets/utilites/search.png";
import ronaldo from "../assets/users/ronaldo.jpg";
import andrew from "../assets/users/andrew.jpg";
import antony from "../assets/users/antony-1.jpg";
import ajith from "../assets/users/ajith.jpg";
import elon from "../assets/users/elon.jpg";
import dhoni from "../assets/users/dhoni.webp";
import jamesh from "../assets/users/jamesh.jpg";
import messi from "../assets/users/messi.png";
import rose from "../assets/users/rose.jpg";
import vijay from "../assets/users/vijay.jpg";
import xavior from "../assets/users/xavior.jpg";
import kim from "../assets/users/yo-kim.jpg";
import vinicius from "../assets/users/vinicius.jpg";
import cameron from "../assets/users/cameron.png";
import gerard from "../assets/users/gerard.png";
import simon from "../assets/users/simon.png";
import greendot from "../assets/utilites/green-dot.png";
const Contact = () => {
  const random1 = Math.ceil(Math.random() * 10);
  const random2 = Math.ceil(Math.random() * 15);
  const random3 = Math.ceil(Math.random() * 20);
  const random4 = Math.ceil(Math.random() * 25);
  const random5 = Math.ceil(Math.random() * 30);
  const random6 = Math.ceil(Math.random() * 40);
  const random7 = Math.ceil(Math.random() * 50);

  return (
    <section className="w-full h-full pb-10">
      <div className="flex justify-around items-center pt-4 w-full">
        <h2 className="text-[rgb(101,103,107)] text-lg -ml-5 font-bold">
          Contacts
        </h2>
        <div className="flex items-start space-x-5">
          <img
            src={dotmenu}
            alt="dot-menu-icon"
            className="rounded-full  h-6 ml-2  hover:bg-[#ccc] hover:rounded-xl"
          />
          <img
            src={searchicon}
            alt="dot-menu-icon"
            className="rounded-full  h-6 ml-2 hover:bg-[#ccc] hover:rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={elon}
          alt="ronaldo-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Elon Musk</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={ronaldo}
          alt="ronaldo-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Ronaldo</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={messi}
          alt="Messi-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Messi</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={dhoni}
          alt="dhoni-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Dhoni</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={ajith}
          alt="ajith-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Ajith</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={vijay}
          alt="vijay-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Vijay</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc] w-full p-1 mx-auto ">
        <img
          src={xavior}
          alt="xavior-image"
          className="object-contain ml-3 h-12 w-12 rounded-full "
        />
        <h3 className="pl-2">Xavior</h3>
        <span className="relative -left-24  top-4 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random1}m
        </span>
      </div>

      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={rose}
          alt="rose-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Rose</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={andrew}
          alt="andrew-image"
          className="object-contain ml-3 h-12 w-12 rounded-full"
        />
        <h3 className="pl-1">Andrew</h3>
        <span className="relative -left-24  top-4 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random2}m
        </span>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={antony}
          alt="antony-image"
          className="object-contain ml-3 h-12 w-12 rounded-full"
        />
        <h3 className="pl-2">Antony</h3>
        <span className="relative -left-24  top-4 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random3}m
        </span>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={cameron}
          alt="cameron-image"
          className="object-contain ml-3 h-12 w-12 rounded-full"
        />
        <h3 className="pl-2">Cameron</h3>
        <span className="relative -left-[110px]  top-4 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random4}m
        </span>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={vinicius}
          alt="vincius-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Vinicius</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={kim}
          alt="kim-image"
          className="object-contain ml-3 h-12 w-12 rounded-full"
        />
        <h3 className="pl-4">Kim</h3>
        <span className="relative -left-[82px]  top-4 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random5}m
        </span>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={jamesh}
          alt="jamesh-image"
          className="object-contain ml-3 h-12 w-12 rounded-full"
        />
        <h3 className="ml-3">Jamesh</h3>
        <span className="relative -left-24  top-4 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random6}m
        </span>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto ">
        <img
          src={gerard}
          alt="ronaldo-image"
          className="object-contain ml-3 h-12 w-12 rounded-full absolute"
        />
        <img
          src={greendot}
          alt="active-png"
          className="relative left-3 top-4"
        />
        <h3 className="ml-3">Gerard</h3>
      </div>
      <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 mx-auto pb-14">
        <img
          src={simon}
          alt="simon-image"
          className="object-contain ml-3 h-12 w-12 rounded-full"
        />
        <h3 className="ml-3">Simon</h3>
        <span className="relative -left-[85px]  top-3 p-[1px] rounded-full text-white text-xs font-medium bg-[rgb(49,162,76)]">
          {random2}m
        </span>
      </div>
    </section>
  );
};

export default Contact;
