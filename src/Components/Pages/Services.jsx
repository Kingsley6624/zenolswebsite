import React from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage2.png";
import Offer from "../Offer";
import bgimg2 from "../../assets/images/bgimage.png";
import Download from "../Download";
import downloadicon from "../../assets/icons/download.svg";
import priceicon from "../../assets/icons/price.svg";
import Card2 from "../Card2";
import commercialimg from "../../assets/images/commercial.png";
import realEstate from "../../assets/images/realestate.jpg"
import electrical from "../../assets/images/electrical.jpg"
import construction from "../../assets/images/construction.jpg"
import consultant from "../../assets/images/consultant.jpg"
const items = [
  {
    id: 1,
    img: construction,
    head: "Building Construction",
    body: "Adding structures to real property, factoring construction costs, project longevity, regulations, and environmental or structural risks.",
  },
  {
    id: 2,
    img: consultant,
    head: "Engineering Consultancy",
    body: "Delivering smart, practical engineering consultancy that turns complex challenges into streamlined solutions across infrastructure, and construction, ",
  },
  {
    id: 3,
    img: realEstate,
    head: "Real Estate",
    body: "Integrating structural improvements into real estate while assessing cost, lifespan, regulations, and potential construction or environmental risks.",
  },
  {
    id: 4,
    img: electrical,
    head: "Electrical Services",
    body: "Executing electrical installations and maintenance with focus on safety, efficiency, compliance, and system reliability across environments.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#ededed]">
      <Pagehead
        text="SERVICES"
        bgimg={{ backgroundImage: `url(${bgimage})` }}
      />

      <div className="px-[5%] py-16 flex flex-col gap-10 items-center">
        <div className="flex justify-center w-full items-center">
          <h2 className="text-center font-bold text-xl md:text-4xl ">
            OUR SERVICES
          </h2>
        </div>
        <p className="text-xl text-center md:text-start">
          We offer a comprehensive range of cost effective services for
          residential and commercial properties.
        </p>

        <div className="w-full justify-between grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-7 md:gap-5">
          {items.map((item) => (
            <Card2
              key={item.id}
              img={item.img}
              head={item.head}
              body={item.body}
            />
          ))}
        </div>
      </div>

      {/* <Offer /> */}
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
        <div className="absolute inset-0 bg-[#e54843] bg-opacity-70 "></div>

        <div className="flex flex-col items-center relative z-20 text-white gap-5 ">
          <h3 className="font-semibold text-4xl">ALL SERVICES</h3>
          <p className="text-xl">
            Here a a detailed list of all services we offer
          </p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-5">
              <h4 className="font-medium text-xl md:text-2xl">
                Residential Buildings
              </h4>
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
              <h4 className="font-medium text-xl md:text-2xl">
                Commercial Buildings
              </h4>
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
