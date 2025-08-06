import React from "react";

const Pagehead = ({ bgimg, text }) => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center  text-2xl md:text-4xl font-semibold text-white py-14"
      style={bgimg}
    >
      {text}
    </div>
  );
};

export default Pagehead;
