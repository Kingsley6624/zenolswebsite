import React from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage2.png";
import bgimg2 from "../../assets/images/bgimage.png";
import Download from "../Download";
import downloadicon from "../../assets/icons/download.svg";
import priceicon from "../../assets/icons/price.svg";
import Card2 from "../Card2";
import realEstate from "../../assets/images/realestate.jpg";
import electrical from "../../assets/images/electrical.jpg";
import construction from "../../assets/images/construction.jpg";
import consultant from "../../assets/images/consultant.jpg";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        <p className="text-sm md:text-xl text-center md:text-start">
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
          link={() => navigate('/')}
          img={downloadicon}
          head="Our Brochure"
          text="Download our brochure to know
more about our services"
        />
        <Download
        link={() => window.open('https://drive.google.com/file/d/1prIO-wQ7tSDn2sivjh_PFd3NEcC5Tzf-/view?usp=drivesdk', '_blank')}
          img={priceicon}
          head="Price List"
          text="Download our list to know more
about our affordable prices"
        />
      </div>
      <div
        className="md:px-[20%] py-16 bg-no-repeat bg-cover bg-center relative flex justify-center"
        style={{ backgroundImage: `url(${bgimg2})` }}
      >
        <div className="absolute inset-0 bg-[#e54843] bg-opacity-70 "></div>

        <div className="flex flex-col items-center relative z-20 text-white gap-5 ">
          <h3 className="font-semibold md:text-4xl text-xl">ALL SERVICES</h3>
          <p className="md:text-xl text-sm">
            Here a a detailed list of all services we offer
          </p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-5 pl-4">
              <h4 className="font-medium text-l md:text-2xl">
                  Electrical Services
              </h4>
              <ul className="text-sm md:text-xl">
                <li>Electrical System Design and Layout</li>
                <li>Electrical Testing and Commissioning</li>
                <li>Outlets, Circuits and Rewiring</li>
                <li>Indoor and Outdoor Lighting</li>
                <li>Main Electrical Panel and Distribution Board Installation</li>
                <li>Landscape Lighting</li>
                <li>Exhaust Fans</li>
                <li>Smoke Detectors</li>
                <li>Motors and Transformers</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 pl-4">
              <h4 className="font-medium text-l md:text-2xl">
               Construction Services
              </h4>
              <ul className="text-sm  md:text-xl">
                <li>Site Analysis and Selection</li>
                <li>Design Consultation and Architectural Design</li>
                <li>Engineering Services</li>
                <li>Budget Estimation and Cost Planning</li>
                <li>Permit Acquisition and Regulatory Approvals</li>
                <li>Project Planning and Scheduling</li>
                <li>New Building Construction (Residential, Commercial, Industrial)</li>
                <li>Renovation and Remodeling</li>
                <li>Civil and Structural Works</li>
                <li>Roofing, Waterproofing, and Finishing Works</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
