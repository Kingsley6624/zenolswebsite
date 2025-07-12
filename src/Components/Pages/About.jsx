import React from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage1.png";
import Teamlist from "../Teamlist";
import abtimg from "../../assets/images/aboutimg.png";
import Card3 from "../Card3";
import icon1 from '../../assets/icons/abticon1.svg'
import icon2 from '../../assets/icons/abticon2.svg'
import icon3 from '../../assets/icons/abticon3.svg'

const About = () => {
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
          <h2 className="font-semibold text-4xl">Welcome to Electro</h2>
          <p className="text-xl text-[#272727]">
            With over 8 years experience in the industry, adipiscing elit.
            Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac,
            morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tortor vel posuereWith over 8 years experience in the industry,
            adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam
            consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis
            sollicitudin molt.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tortor vel posuereWith over 8 years experience in the industry,
            adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam
            consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis
            sollicitudin molt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Tortor vel posuereWith over 8 years experience in
            the industry, adipiscing elit. Tortor vel posuere vitae enim,
            molestie.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-between gap-10 bg-[#ededed] py-5 px-[5%] mt-20 lg:mt-40 items-center'>
        <Card3 img={icon1} head='Safety Maintainance' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere'/>
        <Card3 img={icon2} head='Electrical Installation' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' />
        <Card3  img={icon3} head='Service Maintenance' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere' />
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
