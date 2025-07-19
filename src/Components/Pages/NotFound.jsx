import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-[#d39c01] text-white size-fit rounded-2xl py-12 md:p-12  w-fit mx-auto mt-20">
      <h2 className="font-bold text-[200px] text-white">404</h2>
      <p className="text-center text-2xl">
        Sorry!
        <br /> The link is broken, try to refresh or go to home
      </p>
  
      <button
        className="mt-4 py-2 px-5 bg-white text-[#333333] rounded-lg font-semibold"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
