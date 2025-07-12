import React from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage2.png";
import Button from "../Button";
import face from "../../assets/icons/drkfac.svg";
import x from "../../assets/icons/drkX.svg";
import insta from "../../assets/icons/drkinsta.svg";
import email from "../../assets/icons/drkemail.svg";

const Contactus = () => {
  return (
    <div>
      <Pagehead
        text="CONATACT US"
        bgimg={{ backgroundImage: `url(${bgimage})` }}
      />

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3797168072056!2d3.313428073503886!3d6.473493623745525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b897771e8f513%3A0x3057663bfe8c92c7!2sUnique%20Estate!5e0!3m2!1sen!2sng!4v1752251058438!5m2!1sen!2sng"
          className="w-full h-[623px]"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row px-[5%] py-8 bg-[#ededed] gap-10">
        <div className="basis-1/2 flex flex-col gap-5 items-center md:items-start">
          <h2 className="text-[#272727] font-bold text-4xl">Contact Info</h2>
          <p className=" text-center md:text-left">
            With over 8 years experience in
            <br /> the industry, adipiscing elit. Tortor vel posuere
          </p>
          <div>
            <p className=" text-center md:text-left">0012, Chiranci Street Kano, Nigeria</p>
            <p className=" text-center md:text-left">electro@mailservice.com</p>
            <p className=" text-center md:text-left">+2348100112233</p>
          </div>

          <div className="flex gap-2">
            <img src={face} alt="" />
            <img src={x} alt="" />
            <img src={insta} alt="" />
            <img src={email} alt="" />
          </div>
        </div>
        <div className="basis-1/2 flex flex-col">
          <h2 className="text-[#272727] font-bold text-4xl mb-5 self-center md:self-start">
            Send Us a Message
          </h2>
          <form className=" flex flex-col gap-5" action="">
            <div className="flex flex-col className='text-xl'">
              <label htmlFor="">Full Name</label>
              <input className="p-2 rounded-sm" type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email Address</label>
              <input className="p-2 rounded-sm" type="email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Message</label>
              <textarea className="p-2 rounded-sm" name="" id=""></textarea>
            </div>
            <div className="self-center md:self-start">
              <Button
                text="Send"
                style="font-bold text-2xl text-white bg-[#002992] py-1 px-10 border-2 border-[#002992]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
