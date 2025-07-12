import React from "react";
import img from "../../assets/images/footerimg.png";
import logo from "../../assets/icons/logoicon.svg";
import facebook from "../../assets/icons/Vector3.svg";
import x from "../../assets/icons/Vector4.svg";
import insta from "../../assets/icons/Vector5.svg";
import gmail from "../../assets/icons/Vector6.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-[#ededed] pt-16">
      <div
        className="bg-[#293554] text-white bg-left  bg-no-repeat px-[5%] py-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="max-w-[382px] w-full flex flex-col gap-5">
          <div className="flex items-center gap-2 self-center md:self-start">
            <img src={logo} alt="" />
            <span className="font-bold text-4xl text-white">Zenols</span>
          </div>
          <p className="text-xl">
            With over 8 years experience in the industry, adipiscing elit.
            Tortor vel posuere <br />
            <br /> 0012, Chiranci Street Kano, Nigeria electro@mailservice.com
            +2348100112233
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-center">
          <h3 className="font-medium text-2xl mr-5">Explore</h3>
          <ul className="flex flex-col  gap-1 text-xl">
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-3 w-fit">
            <h3 className="font-medium text-2xl">Newsletter</h3>
            <div className="border border-white rounded-md flex flex-nowrap">
              <input className="p-3 text-black rounded-l-md" type="text" />
              <button className="bg-[#002992]  rounded-r-md p-3">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-2xl">Socials</h3>
            <div className="flex gap-4">
              <img src={facebook} alt="" />
              <img src={x} alt="" />
              <img src={insta} alt="" />
              <img src={gmail} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2 text-[#8B8B8B] bg-[#ededed]">
        <span className="text-center">{`Zenols © ${currentYear}`}</span>
      </div>
    </div>
  );
};

export default Footer;
