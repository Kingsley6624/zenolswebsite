import React from "react";
import Card3 from "./Card3";
import EngineeringIcon from "@mui/icons-material/Engineering";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocationCityIcon from '@mui/icons-material/LocationCity';


const Offer = () => {
  const items = [
    {
      id: 1,
      Icon: LocationCityIcon,
      head: "Building Construction",
      body: "Adding structures to real property, factoring construction costs, project longevity, regulations, and environmental or structural risks.",
    },
    {
      id: 2,
      Icon: EngineeringIcon,
      head: "Engineering Consultancy",
      body: "Delivering smart, practical engineering consultancy that turns complex challenges into streamlined solutions across infrastructure, construction, and environmental planning",
    },
    {
      id: 3,
      Icon: VpnKeyIcon,
      head: "Real Estate",
      body: "Integrating structural improvements into real estate while assessing cost, lifespan, regulations, and potential construction or environmental risks.",
    },
    {
      id: 4,
      Icon: LightbulbIcon,
      head: "Electrical Services",
      body: "Executing electrical installations and maintenance with focus on safety, efficiency, compliance, and system reliability across environments.",
    },
  ];

  return (
    <div className=" flex flex-col items-center gap-6 py-16 px-[5%]  bg-[#ededed]">
      <h2 className="text-center font-semibold text-4xl">WE OFFER</h2>
      <p className="text-xl text-center md:text-start">
        We offer a comprehensive range of cost effective services for
        residential and commercial properties.
      </p>
      <div className="justify-between grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 w-full">
        {items.map((item)=>(
          <div key={item.id}>
            <Card3
            id={item.id}
            Icon={item.Icon}
            head={item.head}
            body={item.body}
            />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
