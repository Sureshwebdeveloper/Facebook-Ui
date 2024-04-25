import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Mainmenuicon = () => {
  return (
    <div className="rounded-full hidden lg:block xl:block 2xl:block">
      <a data-tooltip-id="menu" data-tooltip-content="Menu">
        <svg
          viewBox="0 -6 24 37"
          width={20}
          height={20}
          fill="currentColor"
          className="bg-[rgb(228,230,235)] rounded-full w-10 h-10 cursor-pointer hover:bg-[#cccccceb]"
        >
          <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      </a>
      <Tooltip id="menu" />
    </div>
  );
};

export default Mainmenuicon;
