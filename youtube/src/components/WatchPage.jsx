import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closemenu());
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen px-6 py-4 bg-gray-100">
      {/* Video Player Section */}
      <div className="flex-1">
        <iframe
          className="w-full h-[250px] md:h-[500px] lg:h-[600px] rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Video Info */}
        <h1 className="text-xl font-bold mt-3">Video Title Goes Here</h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="font-semibold">Channel Name</h2>
            <p className="text-sm text-gray-500">123K subscribers</p>
          </div>
          <button className="ml-auto bg-red-600 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Sidebar (Suggested Videos) */}
      <div className="w-full md:w-96 overflow-y-auto h-full bg-white p-4 shadow-lg">
        <h2 className="text-lg font-bold mb-2">Related Videos</h2>
        <div className="space-y-4">
          {/* Dummy suggested videos (Replace with API data) */}
          <div className="flex gap-3">
            <div className="w-36 h-24 bg-gray-300 rounded-lg"></div>
            <div>
              <p className="font-medium">Suggested Video 1</p>
              <p className="text-sm text-gray-500">Channel Name</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-36 h-24 bg-gray-300 rounded-lg"></div>
            <div>
              <p className="font-medium">Suggested Video 2</p>
              <p className="text-sm text-gray-500">Channel Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
