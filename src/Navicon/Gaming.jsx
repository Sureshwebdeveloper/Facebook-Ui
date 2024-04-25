import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Gaming = ({ gaming, GamingColor }) => {
  return (
    <div
      className="hover:bg-[#cccccc96] cursor-pointer px-5 md:px-3 py-2 rounded-md hidden lg:block xl:block 2xl:block "
      onClick={GamingColor}
    >
      <a data-tooltip-id="game" data-tooltip-content="Gaming">
        <svg
          viewBox="0 0 24 24"
          width={30}
          height={30}
          fill={gaming ? "rgb(8,102,255)" : "#000"}
        >
          <path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />
          <path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z" />
        </svg>
      </a>
      <Tooltip id="game" />
    </div>
  );
};

export default Gaming;
