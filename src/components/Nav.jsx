import React, { useState } from "react";
import logo from "../assets/utilites/logo.png";
import search from "../assets/utilites/search.png";
import Homeicon from "../Navicon/Homeicon";
import Videoplayericon from "../Navicon/Videoplayericon";
import Marketplace from "../Navicon/Marketplace";
import Group from "../Navicon/Group";
import Gaming from "../Navicon/Gaming";
import Messengericon from "../Navicon/Messengericon";
import Mainmenuicon from "../Navicon/Mainmenuicon";
import Notificationicon from "../Navicon/Notificationicon";
import profilepic from "../assets/users/megan.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import More from "../Navicon/More";
import Add from "../Navicon/Add";

const Nav = () => {
  const [smenu, setSmenu] = useState(false);
  const [hover, setHover] = useState(false);
  const [videoplayer, setvideoplayer] = useState(false);
  const [market, setMarket] = useState(false);
  const [group, setGroup] = useState(false);
  const [gaming, setGaming] = useState(false);
  const [content, setContent] = useState(false);

  const SmMenuColor = () => {
    setSmenu(!smenu);
  };
  const HoverColor = () => {
    setHover(!hover);
  };
  const VideoColor = () => {
    setvideoplayer(!videoplayer);
  };
  const MarketColor = () => {
    setMarket(!market);
  };
  const GroupColor = () => {
    setGroup(!group);
  };
  const GamingColor = () => {
    setGaming(!gaming);
  };

  const handleContent = () => {
    setContent(!content);
  };
  return (
    <nav className="bg-[#fff] w-full p-6 shadow-sm fixed z-30 ">
      <div className="w-full  flex items-center justify-around h-5">
        <div className="flex items-center justify-start w-1/3 md:w-1/5 md:mr-7 2xl:w-1/3">
          <div className="bg-blue-500 text-white font-black text-3xl  2xl:w- sm:w-8 md:w-8 lg:w-9  text-center rounded-full  mr-3  my-4 md:mr-5">
            <img src={logo} alt="" />
          </div>
          <label htmlFor="searchbox" className="2xl:mr-10 ">
            <img
              src={search}
              alt=""
              className="sm:h-8 sm:w-10 xl:absolute xl:h-8 xl:mt-1 xl:ml-2 xl:pl-3 lg:absolute lg:ml-3 lg:h-7 lg:mt-2 md:h-8 md:mt-1 lg:my-auto 2xl:absolute 2xl:h-8 2xl:mt-1 2xl:flex-initial 2xl:my-auto"
            />
            <input
              type="text"
              placeholder="search facebook"
              id="searchbox"
              className="my-auto text-center  mr-5 ml-2 py-2 lg:px-4 px-8 rounded-full caret-slate-300 placeholder:pl-8  bg-[rgb(240,242,245)] outline-none hidden lg:block xl:block 2xl:block"
            />
          </label>
          <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <More
              smmenu={smenu}
              SmMenuColor={SmMenuColor}
            />
          </div>
        </div>
        <div className="flex mx-auto w-1/3  items-center justify-center  md:ml-9">
          <div className="flex w-full xl:space-x-6 2xl:space-x-9 md:space-x-[3vw]  items-center justify-start md:mr-26">
            <Homeicon hover={hover} HoverColor={HoverColor} />
            <Videoplayericon
              videoplayer={videoplayer}
              VideoColor={VideoColor}
            />
            <Marketplace market={market} MarketColor={MarketColor} />
            <Group group={group} GroupColor={GroupColor} />
            <Gaming gaming={gaming} GamingColor={GamingColor} />
            <div className="sm:hidden md:block xl:hidden 2xl:hidden md:mr-4">
              <More smmenu={smenu} SmMenuColor={SmMenuColor} onClick={handleContent}
              content={content}/>
            </div>
          </div>
        </div>
        <div className="flex w-1/4  items-center justify-center">
          <div className="flex w-full space-x-2 md:space-x-1 sm:space-x-4 items-center justify-end">
            <Add />
            <Mainmenuicon />
            <Messengericon />
            <Notificationicon />
            <a data-tooltip-id="account" data-tooltip-content="Account">
              <img
                src={profilepic}
                alt=""
                className="rounded-full h-10 mr-6 sm:w-16  object-cover md:mr-0 "
              />
              <Tooltip id="account" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
