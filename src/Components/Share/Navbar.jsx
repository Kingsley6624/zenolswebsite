import React from "react";
import Head from "../Head";
import { NavLink } from "react-router-dom";
import search from "../../assets/icons/search.svg";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
   
  return (
   
    <div className="">
      <Head />
      <nav
        className="flex justify-center md:justify-between text-white px-[5%]"
        style={{
          background: "linear-gradient(to bottom, #d39c01 8%, #000000 16%)",
        }}
        
      >
        <ul className="flex gap-6 h-[48px] items-center">
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
        <div className="hidden sm:flex">
          <SearchIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
