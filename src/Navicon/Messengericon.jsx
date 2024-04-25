import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Messengericon = () => {
  return (
    <div>
      <a data-tooltip-id="messenger" data-tooltip-content="Messenger">
        <svg
          viewBox="1 -2 9 18"
          width={20}
          height={20}
          fill="currentColor"
          className="bg-[rgb(228,230,235)] rounded-full w-10 h-10 cursor-pointer  hover:bg-[#cccccceb]"
        >
          <g fillRule="evenodd" transform="translate(-450 -1073)">
            <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82" />
          </g>
        </svg>
      </a>
      <Tooltip id="messenger"/>
    </div>
  );
};

export default Messengericon;
