import React from "react";
import Head from "../Head";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logoicon.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="hidden lg:flex">
        <Head />
      </div>

      <nav
        className="flex justify-between md:justify-between items-center text-white px-[5%] w-full"
        style={{
          background: "linear-gradient(to bottom, #d39c01 8%, #000000 16%)",
        }}
      >
        <div className="flex items-center lg:hidden">
          <img src={logo} alt="" className="h-full w-[40px]" />
          <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#dcb421] to-[#d39c01]">
            ZONELS
          </span>
        </div>
        <div className="flex md:hidden">
          <MenuIcon />
        </div>

        <ul className="md:flex justify-between flex-wrap gap-3 md:justify-end lg:justify-start w-full md:gap-6 py-2 items-center hidden ">
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
