import React from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.png";

const Recentproj = () => {
  return (
    <div className="flex flex-col items-center px-[5%] py-16 gap-6 w-full">
      <h2 className="text-center font-semibold text-4xl">FEATURED PROJECTS</h2>
      <div className=" justify-center grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full items-center">
        <div>
          <img src={img1} alt="" className="h-[300px] rounded-md w-full" />
        </div>
        <div>
          <img src={img2} alt="" className="h-[300px] rounded-md w-full" />
        </div>
        <div>
          <img src={img3} alt="" className="h-[300px] rounded-md w-full" />
        </div>
        <div>
          <img src={img4} alt="" className="h-[300px] rounded-md w-full" />
        </div>
      </div>
    </div>
  );
};

export default Recentproj;
