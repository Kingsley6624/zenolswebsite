import React from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Recentproj = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-[5%] py-16 gap-6 w-full">
      <div className="flex justify-between w-full items-center">
        <h2 className="text-center font-bold text-xl md:text-4xl">
          FEATURED PROJECTS
        </h2>

        <Button
          onClick={() => navigate("/projects")}
          text="View All"
          style="font-bold text-l md:text-2xl text-[#dcb421] bg-transparent p-1 border-2 border-[#dcb421] text-nowrap transition-all duration-300 hover:scale-105 hover:bg-[#dcb421] hover:text-white rounded-lg"
        />
      </div>
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
