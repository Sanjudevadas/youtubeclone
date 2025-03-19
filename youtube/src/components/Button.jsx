import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 m-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-md transition duration-200">
      {text}
    </button>
  );
};

export default Button;
