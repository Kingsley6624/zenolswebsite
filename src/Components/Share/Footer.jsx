import React, { useRef } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/footerimg.png";
import logo from "../../assets/icons/logoicon.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch("https://formspree.io/f/movldrya", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        alert("Thanks for subscribing!");
        formRef.current.reset();
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("There was an error sending your message.", error);
    }
  };
  return (
    <div className="w-full bg-[#ededed] pt-16">
      <div
        className="bg-[#293554] text-white bg-left  bg-no-repeat px-[5%] py-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="max-w-[382px] w-full flex flex-col gap-3">
          <div className="flex items-center self-center md:self-start">
            <img src={logo} alt="" className="h-full w-[40px] md:w-[100px]" />
            <span className="font-bold  text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#E8211A] to-[#eb423c]">
              Z0NELS
            </span>
          </div>
          <div className="text-base flex flex-col gap-3 md:text-xl">
           <p>Please contact us via email or phone, or visit our office. We are
            available to help you.</p> 
           
            <p>Arthur Eze Plaza, Off Igwebuike grammar school, Awka, Anambra State.</p>
            <span>support@zonelsengineering.com.ng</span>
            <span>+2348064845313</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:items-center">
          <h3 className="font-medium text-2xl mr-5">Explore</h3>
          <ul className="flex flex-col  gap-1 text-xl">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/">
              <li>Projects</li>
            </Link>
            <Link to="/">
              <li>Testimonial</li>
            </Link>
            <Link to="/">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-3 w-fit">
            <h3 className="font-medium text-2xl">Newsletter</h3>
            <form
              className="border border-white rounded-md flex flex-nowrap"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <input className="p-3 text-black rounded-l-md" type="text" name="email" />
              <button className="bg-[#E8211A] border-[#E8211A] rounded-r-md p-3">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-2xl">Socials</h3>
            <div className="flex gap-4">
              <Link
                to="https://web.facebook.com/profile.php?id=100089172412141"
                className="transition-all duration-300 hover:scale-125"
              >
                <FacebookIcon fontSize="large" />
              </Link>
              <Link
                to=""
                className="transition-all duration-300 hover:scale-125"
              >
                <XIcon fontSize="large" />
              </Link>
              <Link
                to=""
                className="transition-all duration-300 hover:scale-125"
              >
                <InstagramIcon fontSize="large" />
              </Link>
              <Link
                to=""
                className="transition-all duration-300 hover:scale-125"
              >
                <GoogleIcon fontSize="large" />
              </Link>
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
