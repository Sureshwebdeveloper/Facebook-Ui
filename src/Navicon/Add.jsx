import React from "react";

const Add = () => {
  return (
    <div className="block lg:hidden xl:hidden 2xl:hidden">
      <svg
        viewBox="-2 0 24 20"
        width={20}
        height={20}
        fill="#000"
        className="bg-[rgb(228,230,235)] rounded-full w-9 h-9 cursor-pointer  hover:bg-[#cccccceb] mr-2"
      >
        <g fillRule="evenodd" transform="translate(-446 -350)">
          <g fillRule="nonzero">
            <path
              d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
              transform="translate(354.5 159.5)"
            />
            <path
              d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
              transform="translate(354.5 159.5)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Add;
