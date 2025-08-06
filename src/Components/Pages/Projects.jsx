import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img8.jpg";
import img8 from "../../assets/images/img9.jpg";
import img9 from "../../assets/images/img10.jpg";
import img10 from "../../assets/images/img11.jpg";

function Projects() {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-5">
      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img1} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img2} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img3} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img4} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img5} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img6} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img7} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img8} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img9} alt="" className=" rounded-md w-full" />
      </div>

      <div className="transition-transform duration-300 hover:scale-95">
        <img src={img10} alt="" className=" rounded-md w-full" />
      </div>
    </div>
  );
}

export default Projects;
