import React from "react";
import heroimg from "../assets/images/HeroImage.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="h-[696px] w-full text-white flex flex-col justify-center pt-16 md:pl-[5%] gap-5 items-center md:items-start"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">SAFE AND SECURE</h2>
        <p className="text-2xl md:text-3xl">We are a Service You Can Trust</p>
        <Button
          onClick={() => navigate("/contact")}
          text="Contact Us Now"
          style="font-bold text-2xl text-[#dcb421] bg-transparent p-1 border-2 border-[#dcb421] text-nowrap transition-all duration-300 hover:scale-105 hover:bg-[#dcb421] hover:text-white"
        />
      </div>
    </div>
  );
};

export default Herosection;
