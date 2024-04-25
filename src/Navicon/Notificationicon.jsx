import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Notificationicon = () => {
  return (
    <div>
      <a data-tooltip-id="notification" data-tooltip-content="Notification">
        <span className="bg-red-500 text-white p-[2px] py-0 px-1 text-sm rounded-full absolute ml-6 md:hidden">
          8
        </span>
        <svg
          viewBox="-4 0 33 23"
          width={20}
          height={20}
          fill="currentColor"
          className="bg-[rgb(228,230,235)] rounded-full w-10 h-10 cursor-pointer  hover:bg-[#cccccceb] md:hidden"
        >
          <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z" />
        </svg>
      </a>
      <Tooltip id="notification"/>
    </div>
  );
};

export default Notificationicon;
