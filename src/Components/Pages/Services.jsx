import React from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage2.png";
import Ourservices from "../Ourservices";
import Offer from "../Offer";
import bgimg2 from "../../assets/images/bgimage.png";
import Download from "../Download";
import downloadicon from "../../assets/icons/download.svg";
import priceicon from "../../assets/icons/price.svg";

const Services = () => {
  return (
    <div className="bg-[#ededed]">
      <Pagehead
        text="SERVICES"
        bgimg={{ backgroundImage: `url(${bgimage})` }}
      />
      <Ourservices />
      <Offer />
      <div className="bg-white flex flex-col md:flex-row justify-between items-center px-[5%] pt-2 mb-8 gap-2 md:gap-0">
        <Download
          img={downloadicon}
          head="Our Brochure"
          text="Download our brochure to know
more about our services"
        />
        <Download
          img={priceicon}
          head="Price List"
          text="Download our list to know more
about our affordable prices"
        />
      </div>
      <div
        className="px-[20%] py-16 bg-no-repeat bg-cover bg-center relative flex justify-center"
        style={{ backgroundImage: `url(${bgimg2})` }}
      >
        <div className="absolute inset-0 bg-[#dcb421] bg-opacity-70 "></div>

        <div className="flex flex-col items-center relative z-20 text-white gap-5 ">
          <h3 className="font-semibold text-4xl">ALL SERVICES</h3>
          <p className="text-xl">
            Here a a detailed list of all services we offer
          </p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-5">
              <h4 className="font-medium text-xl md:text-2xl">Residential Buildings</h4>
              <ul className="text-base pl-4 md:text-xl">
                <li>Panel Upgrades</li>
                <li>Breakers and Fuses</li>
                <li>Code Corrections</li>
                <li>Outlets, Circuits and Rewiring</li>
                <li>Indoor and Outdoor Lighting</li>
                <li>Data/Communication Lines</li>
                <li>Landscape Lighting</li>
                <li>Exhaust Fans</li>
                <li>Smoke Detectors</li>
                <li>Home Theater Installation</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-medium text-xl md:text-2xl">Commercial Buildings</h4>
              <ul className="text-base pl-4 md:text-xl">
                <li>Telecom Installation and Repair</li>
                <li>Hosted PBX Solutions</li>
                <li>Outdoor/Parking Lot Lighting</li>
                <li>Outlets, Circuits and Rewiring</li>
                <li>HID Lighting and Control</li>
                <li>Lighting Design</li>
                <li>Motors and Transformers</li>
                <li>Isolated Computer Circuits</li>
                <li>Data/Communications Cabling</li>
                <li>Ballast/Lamp Replacing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
