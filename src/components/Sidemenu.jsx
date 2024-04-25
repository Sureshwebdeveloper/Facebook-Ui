import React, { useState } from "react";
import jack from "../assets/users/jack.png";
import friend from "../assets/utilites/friends.png";
import memories from "../assets/utilites/memories-c.png";
import marketplace from "../assets/utilites/marketplace-c.png";
import saved from "../assets/utilites/saved-c.png";
import groups from "../assets/utilites/groups-c.png";
import video from "../assets/utilites/video-c.png";
import feeds from "../assets/utilites/feeds-c.png";
import event from "../assets/utilites/events-c.png";
import ads from "../assets/utilites/adsmanger.png";
import blooddontaion from "../assets/utilites/blood-donation.png";
import climate from "../assets/utilites/climate-science-center.png";
import facebookpay from "../assets/utilites/facebook-pay.png";
import fundriser from "../assets/utilites/fund.png";
import gamingvideo from "../assets/utilites/gaming-video.png";
import messenger from "../assets/utilites/messenger.png";
import messengerkids from "../assets/utilites/messenger-kids.png";
import pages from "../assets/utilites/pages-c.png";
import playgame from "../assets/utilites/game-c.png";
import recent from "../assets/utilites/recent-activity.png";
import downarrow from "../assets/utilites/down-arrow.png";

const Sidemenu = () => {
  const [showmore, setShowmore] = useState(true);
  // const [hidebar, setHidebar] = useState(true);

  const handletext = () => {
    setShowmore(!showmore);
  };

  return (
    <aside
      className={
        "sm:hidden md:hidden lg:block xl:block 2xl:block h-full  flex items-start  2xl:w-1/5 xl:w-1/5 lg:w-1/5 fixed scroll-smooth  overflow-y-scroll bg-[#f0f2f5] top-0 mt-16 box-content z-20"
      }
    >
      <div className="w-full p-1 h-screen ml-4 bg-[#f0f2f5] ">
        <div className="flex items-start justify-center space-y-4 flex-col">
          <div className="flex flex-row items-center justify-start space-x-3 mt-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={friend}
              alt="frined-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">Frineds</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={memories}
              alt="memories-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">Memories</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={marketplace}
              alt="marketplace-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">MarketPlace</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={saved}
              alt="saved-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">Saved</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={groups}
              alt="group-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">Groups</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={video}
              alt="video-icon"
              className="object-contain ml-3 h-7"
            />
            <h3 className="ml-1">Video</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={feeds}
              alt="Feeds-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">Feeds</h3>
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer hover:bg-[#ccc]  w-full p-1 ">
            <img
              src={event}
              alt="Events-icon"
              className="object-contain ml-3 h-8"
            />
            <h3 className="ml-1">Events</h3>
          </div>
          {/* arrow rotate section */}
          <div className="flex  items-start justify-center flex-col w-full p-1 ">
            <div className="flex items-center justify-start cursor-pointer mb-2 bg-zinc-300 py-2 w-full rounded-md ">
              {showmore ? (
                <img
                  src={downarrow}
                  alt="down arrow icon"
                  className=" rotate-180 h-7 ml-3 object-cover bg-slate-400 rounded-full p-1"
                />
              ) : (
                <img
                  src={downarrow}
                  alt="down arrow icon"
                  className="h-7 object-cover ml-3 bg-slate-400 rounded-full p-1"
                />
              )}
              <h4 className="ml-4 font-semibold" onClick={handletext}>
                {showmore ? "Show More" : "Show less"}
              </h4>
            </div>
            {/* showmore */}
            <div
              className={
                showmore ? "hidden" : "block space-y-4 bg-[#f0f2f5] w-full p-1 "
              }
            >
              <div className="flex flex-row items-center justify-start mt-2 hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={ads}
                  alt="blood-donation-icon"
                  className="object-contain h-7 ml-1 mr-3"
                />
                <h3 className="mt-2">Ads Manager</h3>
              </div>
              <div className="flex flex-row items-center justify-start  hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={blooddontaion}
                  alt="blood-donation-icon"
                  className="object-contain  h-7"
                />
                <h3 className="mt-2  mr-2">Blood Donations</h3>
              </div>
              <div className="flex flex-row items-center justify-start hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={climate}
                  alt="climate-science-icon"
                  className="object-contain  h-7 mr-1"
                />
                <h3 className="mt-2">Climate Science Center</h3>
              </div>
              <div className="flex flex-row items-center justify-start hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={facebookpay}
                  alt="facebook-pay-icon"
                  className="object-contain  h-7 mr-1"
                />
                <h3 className="mt-2">Facebook Pay</h3>
              </div>
              <div className="flex flex-row items-center justify-start hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={fundriser}
                  alt="fundriser-icon"
                  className="object-contain ml-1 h-7"
                />
                <h3 className="ml-1">Fundrisers</h3>
              </div>
              <div className="flex flex-row items-center justify-start hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={gamingvideo}
                  alt="gaming-video-icon"
                  className="object-contain ml-1 h-7"
                />
                <h3 className="ml-1">Gaming Video</h3>
              </div>
              <div className="flex flex-row items-center justify-start   hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={messenger}
                  alt="messenger-icon"
                  className="object-contain ml-1 h-7"
                />
                <h3 className="ml-1">Messenger</h3>
              </div>
              <div className="flex flex-row items-center justify-start  hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={messengerkids}
                  alt="messenger-kids-icon"
                  className="object-contain ml-1 h-7"
                />
                <h3 className="ml-1">Messenger Kids</h3>
              </div>
              <div className="flex flex-row items-center justify-start   hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={pages}
                  alt="Pages-icon"
                  className="object-contain ml-1  h-7"
                />
                <h3 className="ml-1">Pages</h3>
              </div>
              <div className="flex flex-row items-center justify-start   hover:bg-[#ccc]  w-full p-1   cursor-pointer">
                <img
                  src={playgame}
                  alt="playgames-icon"
                  className="object-contain  h-7 ml-1"
                />
                <h3 className="ml-1">Play Games</h3>
              </div>
              <div className="flex flex-row items-center justify-start  hover:bg-[#ccc] ml-1 w-full p-1   cursor-pointer">
                <img
                  src={recent}
                  alt="recent-activity-icon"
                  className="object-contain  h-7 m1-1"
                />
                <h3 className="ml-1">Recent and activity</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidemenu;
