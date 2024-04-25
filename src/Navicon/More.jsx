import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Morecontent from "../components/Morecontent";
const More = ({ smmenu, SmMenuColor, content }) => {
  return (
    <div
      onClick={SmMenuColor}
      className="hover:bg-[#cccccc96] cursor-pointer px-6 md:px-3 py-2 rounded-md "
    >
      <a data-tooltip-id="menu" data-tooltip-content="More">
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          fill={smmenu ? "rgb(8,102,255)" : "#000"}
          className="ml-4 md:ml-1 md:mr-1"
        >
          <path d="M3.25 2.75a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5H3.25zM2 12c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 13.25 2 12.69 2 12zm0 8c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 21.25 2 20.69 2 20z" />
        </svg>
      </a>
      <Tooltip id="menu" />
      <Morecontent content={content} />
    </div>
  );
};

export default More;
