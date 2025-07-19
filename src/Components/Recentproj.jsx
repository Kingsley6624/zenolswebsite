import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

const Recentproj = () => {
  return (
    <div className="flex flex-col items-center px-[5%] py-16 gap-6 w-full">
      <h2 className="text-center font-semibold text-4xl">FEATURED PROJECTS</h2>
      <div className=" justify-between flex flex-col md:flex-row md:items-center gap-5 w-full">
        <div className="w-[361px] h-[271px]">
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recentproj;
