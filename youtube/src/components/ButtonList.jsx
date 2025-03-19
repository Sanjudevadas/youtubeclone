import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Songs",
    "Live",
    "Football",
    "Cooking",
    "Valentine's",
    "Movies",
    "News",
    "Drama",
  ];

  return (
    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
      {buttons.map((btn, index) => (
        <Button key={index} text={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
