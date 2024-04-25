//  This page for user updated photo show
import axios from "axios";
import { useState, useEffect } from "react";
import Postcard from "./Postcard";
import love_icon from "../assets/utilites/heart-c.png";
import like_icon from "../assets/utilites/like-c.png";
import comment_fill from "../assets/utilites/comment-fill.png";
import share_fill from "../assets/utilites/share-fill.png";
import like from "../assets/utilites/like-btn.png";
import comment from "../assets/utilites/comment.png";
import share from "../assets/utilites/share.png";
import { createClient } from "pexels";
const Post = ({ handleReaction }) => {
  const [images, setImages] = useState([]);

  const client = createClient(import.meta.env.VITE_API_KEY);

  const fetchData = () => {
    axios
      .get(client)
      .then((response) => setImages(response.data))
      .catch((err) => console.log(err));
    fetchData();
  };

  return (
    <>
      {images.map((data, index) => {
        <div key={index}>
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-blue-600  font-bold mb-2">
              #{data.location.country} #{data.location.city}
            </h3>
            <img
              src={data.urls.small}
              alt={data.alt_description}
              className="object-cover rounded-md w-80"
            />
            <div className="pt-[1px] w-full my-3 mx-auto  bg-slate-300"></div>
          </div>
          {/* like count section */}
          <div className="space-x-1 flex  justify-evenly items-center">
            <div className="flex items-center flex-row justify- w-full mr-20">
              <img src={like_icon} alt="" className="object-cover h-4" />
              <img src={love_icon} alt="" className="object-cover h-4" />
              {data.likes}K
            </div>
            <div className="flex items-center">
              {data.total_photos}
              <img
                src={comment_fill}
                alt="comment_icon"
                className="object-cover h-5 mr-3"
              />
              {data.total_likes}
              <img
                src={share_fill}
                alt="comment_icon"
                className="object-cover h-5"
              />
            </div>
          </div>
          <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>

          {/* Like,comment,Share section */}
          <div className="space-x-5 pt-5 flex items-center -mt-4 ">
            <button className=" flex ">
              <img src={like} alt="" className="h-6" onClick={handleReaction} />
              <span>Like</span>
            </button>
            <button className="flex">
              <img src={comment} alt="" className="h-6" />
              Comment
            </button>
            <button className="flex">
              <img src={share} alt="" className="h-6" /> Share
            </button>
          </div>
          <div className="pt-[1px] w-full mt-3 mx-auto  bg-slate-300"></div>
        </div>;
      })}
    </>
  );
};

export default Post;
