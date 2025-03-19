import React from "react";

const formatViews = (views) => {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + "M views";
  if (views >= 1000) return (views / 1000).toFixed(1) + "K views";
  return views + " views";
};

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 cursor-pointer p-2">
      {/* Video Thumbnail */}
      <img
        src={thumbnails.high.url}
        alt="video thumbnail"
        className="w-full h-44 object-cover rounded-lg"
      />

      {/* Video Info */}
      <div className="flex mt-3">
        {/* Channel Icon (Placeholder for now) */}
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500">{channelTitle}</p>
          <p className="text-xs text-gray-500">{formatViews(statistics.viewCount)}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
