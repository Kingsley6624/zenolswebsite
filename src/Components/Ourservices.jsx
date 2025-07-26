import React from "react";
import Card2 from "./Card2";

import homeimg from "../assets/images/home.png";
import commercialimg from "../assets/images/commercial.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    img: homeimg,
    head: "Building Construction",
    body: "Adding structures to real property, factoring construction costs, project longevity, regulations, and environmental or structural risks.",
  },
  {
    id: 2,
    img: commercialimg,
    head: "Engineering Consultancy",
    body: "Delivering smart, practical engineering consultancy that turns complex challenges into streamlined solutions across infrastructure, and construction, "
  },
  {
    id: 3,
    img: commercialimg,
    head: "Real Estate",
    body: "Integrating structural improvements into real estate while assessing cost, lifespan, regulations, and potential construction or environmental risks.",
  },
  {
    id: 4,
    img: commercialimg,
    head: "Electrical Services",
    body: "Executing electrical installations and maintenance with focus on safety, efficiency, compliance, and system reliability across environments.",
  },
];

const Ourservices = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[5%] py-16 flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full items-center">
        <h2 className="text-center font-bold text-xl md:text-4xl ">
          OUR SERVICES
        </h2>

        <Button
          onClick={() => navigate("/services")}
          text="View All"
          style="font-bold text-l md:text-2xl text-[#dcb421] bg-transparent p-1 border-2 border-[#dcb421] text-nowrap transition-all duration-300 hover:scale-105 hover:bg-[#dcb421] hover:text-white rounded-lg"
        />
      </div>
      

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
  );
};

export default Ourservices;
