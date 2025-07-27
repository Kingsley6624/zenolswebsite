import React, { useState } from "react";
import Head from "../Head";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logoicon.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full">
      <div className="hidden lg:flex">
        <Head />
      </div>

      <nav
        className="flex flex-col justify-between md:justify-between items-center text-white px-[5%] py-3 w-full bg-black"
        
      >
        <div className="w-full flex justify-between items-center "><div className="flex items-center lg:hidden">
          <img src={logo} alt="" className="h-full w-[40px]" />
          <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#E8211A] to-[#eb423c]">
            ZONELS
          </span>
        </div>
        <div className="flex md:hidden cursor-pointer" onClick={()=> setIsOpen((prev)=>!prev)}>{isOpen? (<CloseIcon className=" transition-transform duration-300" />) : (<MenuIcon className=" transition-transform duration-300" />)}
          
        </div></div>
        
        {isOpen && (
         <ul className="flex flex-col w-full gap-6 py-5">
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/" className="text-[20px] ">
              Home
            </NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/services" className="text-[20px]">
              Services
            </NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/about" className="text-[20px]">
              About
            </NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/contact" className="text-[20px]">
              Contact Us
            </NavLink>
          </li>
        </ul> 
        ) }
        

        <ul className="md:flex justify-between flex-wrap gap-3 md:justify-end lg:justify-start w-full md:gap-6 py-1 items-center hidden ">
          <li>
            <NavLink to="/" className="text-[20px] ">
              Home
            </NavLink>
          </li>
          <li className="text-[20px]">
            <NavLink to="/services" className="text-[20px]">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-[20px]">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-[20px]">
              Contact Us
            </NavLink>
          </li>
        </ul>
        {/* <div className="hidden sm:flex">
          <SearchIcon style={{ color: "#ffffff", fontSize: 26 }} />
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
