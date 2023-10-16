import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-36  absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/2">{overview}</p>
      <div className="flex gap-4">
        <button className=" bg-white text-black   md:px-4 text-xl  rounded-lg hover:bg-opacity-80 h-10 w-28">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white text-xl bg-opacity-50 rounded-lg h-10 w-32">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
