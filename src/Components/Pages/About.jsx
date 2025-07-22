import React from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage1.png";
import Teamlist from "../Teamlist";
import abtimg from "../../assets/images/aboutimg.png";
import Card3 from "../Card3";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditNoteIcon from "@mui/icons-material/EditNote";

const About = () => {
  const items = [
    {
      id: 1,
      Icon: EditNoteIcon,
      head: "Free Estimation",
      body: "Get expert cost insights with no strings attached. Our free estimation reveals value before commitment straightforward and smart.",
    },
    {
      id: 2,
      Icon: AccessTimeIcon,
      head: "24/7 Available",
      body: "Around the clock, we're here for you day or night, weekday or weekend, support that never sleeps. Always ready.",
    },
    {
      id: 3,
      Icon: AccountBalanceWalletIcon,
      head: "Affordable Prices",
      body: "Budget friendly, value packed, and designed to fit your wallet quality service without the premium price tag. Your needs, our priority.",
    },
  ];
  return (
    <div className="bg-[#ededed]">
      <Pagehead
        text="AbOUT US"
        bgimg={{ backgroundImage: `url(${bgimage})` }}
      />
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-[5%] px-[5%] py-10 lg:items-stretch">
        <div
          className="bg-no-repeat bg-cover bg-center basis-1/2 min-h-[400px]"
          style={{ backgroundImage: `url(${abtimg})` }}
        ></div>
        <div className="basis-1/2 flex flex-col gap-3">
          <h2 className="font-semibold text-4xl">Welcome to Zonels Engineering Innovations Limited</h2>
          <p className="text-xl text-[#272727]">
            At Zenols, we build more than structures we craft solutions that
            shape communities, elevate standards, and empower progress. As a
            multidisciplinary firm rooted in integrity and innovation, we bring
            together deep expertise in building construction, engineering
            consultancy, real estate, and electrical services to deliver results
            that stand the test of time.<br/> Whether you're envisioning a bold new
            development, seeking expert guidance on complex engineering
            challenges, exploring property investment opportunities, or looking
            to power your project safely and efficiently our team is dedicated
            to bringing your vision to life with precision, professionalism, and
            purpose. Driven by passion, backed by experience, and focused on
            impact we don’t just complete projects. We create legacies.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-between gap-10 bg-[#ededed] py-5 px-[5%] mt-20 lg:mt-40 items-center">
        {items.map((item) => (
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

      <div className="px-[5%] py-8 items-center bg-white">
        <h2 className="font-semibold text-4xl text-center ">Our Team</h2>
        <p className="text-xl text-center">
          Meat our professional team members who are ever ready and up to the
          task of assisting you
        </p>
        <Teamlist />
      </div>
    </div>
  );
};

export default About;
