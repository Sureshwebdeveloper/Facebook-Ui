import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"

const Group = ({group,GroupColor}) => {
  return (
    <div className='hover:bg-[#cccccc96] px-5 md:px-2 py-2 rounded-md cursor-pointer hidden md:block lg:block xl:block 2xl:block' onClick={GroupColor}>
      <a data-tooltip-id="group" data-tooltip-content="Groups">
      <svg
        viewBox="0 0 24 24"
        width={26}
        height={25}
        fill={group ? "rgb(8,102,255)" : "#000"}
        className=""
      >
        <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z" />
      </svg>
      </a>
      <Tooltip id="group"/>
    </div>
  );
};

export default Group;
