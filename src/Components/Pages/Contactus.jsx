import React, { useRef } from "react";
import Pagehead from "../Pagehead";
import bgimage from "../../assets/images/HeroImage2.png";
import Button from "../Button";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Contactus = () => {
  const formRef = useRef();
  const handleSubmit = ()=> formRef.current.rest();
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
            <p className=" text-center md:text-left">
              Shop 11, Arthur Eze Plaza, Off Igwebuike grammar school, Awka, Anambra State
            </p>
            <p className=" text-center md:text-left">zonelsengineering@gmail.com</p>
            <p className=" text-center md:text-left">+2348064845313</p>
          </div>

          <div className="flex gap-2">
            <a
                href="https://web.facebook.com/profile.php?id=100089172412141"
                className="transition-all duration-300 hover:scale-110"
              >
                <FacebookIcon fontSize="large" />
              </a>
              <a
                href=""
                className="transition-all duration-300 hover:scale-110"
              >
                <XIcon fontSize="large" />
              </a>
              <a
                href=""
                className="transition-all duration-300 hover:scale-110"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                href=""
                className="transition-all duration-300 hover:scale-110"
              >
                <GoogleIcon fontSize="large" />
              </a>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col">
          <h2 className="text-[#272727] font-bold text-4xl mb-5 self-center md:self-start">
            Send Us a Message
          </h2>
          <form
            className="flex flex-col gap-5"
            action="https://formspree.io/f/xwpqpnae"
            method="POST"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="flex flex-col text-xl">
              <label htmlFor="name">Full Name</label>
              <input
                className="p-2 rounded-sm"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                className="p-2 rounded-sm"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                className="p-2 rounded-sm"
                name="message"
                required
              ></textarea>
            </div>
            <div className="self-center md:self-start">
              <Button
                type="submit"
                text="Send"
                style="font-bold text-2xl text-white bg-[#dcb421] py-1 px-10 border-2 border-[#dcb421] transition-all duration-300 hover:scale-105"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
