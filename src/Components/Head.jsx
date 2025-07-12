import React from "react";

import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";

import Headcompo from "./headcompo";
import Button from "./Button";
import logo from '../assets/icons/logoicon.svg'

const Head = () => {
  return (
    <div className="flex justify-between px-[5%]">
          <div className="flex items-center gap-2">
        <img src={logo} alt=""/>
        <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-black via-[#002482] to-[#002992]">
          Zenols
        </span>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        <Headcompo
          img={location}
          text1="0012 Chiranci Street,"
          text2="Kano, Nigeria"
          style="font-medium text-[#272727] text-lg"
        />
        <Headcompo
          img={phone}
          text1="Call Us Anytime"
          text2="+2348100112234"
          style="font-medium text-2xl text-[#002992]"
        />
        <Button
          text="Request A Service"
          style="font-bold text-2xl text-[#002992] bg-transparent p-1 border-2 border-[#002992] text-nowrap"
        />
      </div>
    </div>
  );
};

export default Head;
