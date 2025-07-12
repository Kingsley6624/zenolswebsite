import React from "react";
import Button from "./Button";
import cardimg1 from '../assets/images/Card1.png'

const Card1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-[10%] py-11 bg-[#F5F5F5]">
      <div className="basis-1/2 flex flex-col justify-between p-2 gap-2">
        <h3 className=" font-bold lg:font-semibold text-4xl lg:text-5xl text-black">WE ARE ELECTRO</h3>
        <p className="text-xl text-[#272727]">
          With over 8 years experience in the industry, adipiscing elit. Tortor
          vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi
          erat. Sed ipsum lorem feugiat iaculis sollicitudin molt. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Tortor vel posuere
        </p>
        <Button
          text="Read More..."
          style="font-bold text-2xl text-white bg-[#002992] p-1 border-2 border-[#002992] text-nowrap text-white hover:bg-transparent hover:text-[#002992]"
        />
      </div>
      <div className="basis-1/2 m-auto">
        <img src={cardimg1} alt="" className="w-full h-[345px]"/>
      </div>
    </div>
  );
};

export default Card1;
