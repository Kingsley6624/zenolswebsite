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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch("https://formspree.io/f/xwpqpnae", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        alert("Thanks for contacting us!");
        formRef.current.reset();
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("There was an error sending your message.", error);
    }
  };
  return (
    <div>
      <Pagehead
        text="CONATACT US"
        bgimg={{ backgroundImage: `url(${bgimage})` }}
      />

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3720778789034!2d7.065468273502033!3d6.2145631266793995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382ebbba6e309%3A0x38b014d3726c2ed0!2s11%20arthur%20Eze%20Avenue%2C%20Awka%2C%20Anambra!5e0!3m2!1sen!2sng!4v1753345263704!5m2!1sen!2sng"
          className="w-full h-[623px]"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row px-[5%] py-8 bg-[#ededed] gap-10">
        <div className="basis-1/2 flex flex-col gap-5 items-center md:items-start">
          <h2 className="text-[#272727] font-bold text-l md:text-3xl">Contact Info</h2>
          <p className=" text-center md:text-left text-sm md:text-xl">
            Please contact us via email or phone, or visit our office. We are
            available to help you.
          </p>
          <div>
            <p className=" text-center md:text-left text-sm md:text-xl">
              Arthur Eze Plaza, Off Igwebuike grammar school,
              Awka, Anambra State
            </p>
            <p className=" text-center md:text-left text-sm md:text-xl">
              support@zonelsengineering.com.ng
            </p>
            <p className=" text-center md:text-left text-sm md:text-xl">
              +2348064845313
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://web.facebook.com/profile.php?id=100089172412141"
              className="transition-all duration-300 hover:scale-110"
            >
              <FacebookIcon fontSize="medium" />
            </a>
            <a href="" className="transition-all duration-300 hover:scale-110">
              <XIcon fontSize="medium" />
            </a>
            <a href="" className="transition-all duration-300 hover:scale-110">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="" className="transition-all duration-300 hover:scale-110">
              <GoogleIcon fontSize="medium" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col">
          <h2 className="text-[#272727] font-bold text-xl md:text-3xl mb-5 self-center md:self-start">
            Send Us a Message
          </h2>
          <form
            className="flex flex-col gap-5 text-sm md:text-xl"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="flex flex-col">
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
                style="font-bold text-sm md:text-base text-white bg-[#E8211A] py-1 px-5 md:px-10 border-2 border-[#E8211A] transition-all duration-300 hover:scale-110 rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
