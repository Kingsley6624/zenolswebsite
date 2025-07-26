import React, { useEffect, useState } from "react";
import heroimg1 from "../assets/images/Hero1.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import heroimg2 from "../assets/images/Hero2.jpg";
import heroimg3 from "../assets/images/Hero3.jpg";
import { AnimatePresence, motion } from "framer-motion";

const heroData = [
  { heading: "WE ARE ZONELS", text: "Upgrade Your Journey", image: heroimg1 },
  {
    heading: "WE ARE EXPERIENCED",
    text: "Upgrade Your Journey",
    image: heroimg2,
  },
  {
    heading: "WE ARE DEDICATED",
    text: "Upgrade Your Journey",
    image: heroimg3,
  },
];

const Herosection = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    if (slideIndex < heroData.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div>
      <div
        className="h-[330px] md:h-[696px] w-full  bg-no-repeat bg-center bg-cover flex flex-col relative"
        style={{ backgroundImage: `url(${heroData[slideIndex].image})` }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-40"></div>
        <div className="text-white flex flex-col justify-center pt-16 md:pl-[5%] gap-5 items-center md:items-start my-auto z-10 text-center md:text-start">
          

<AnimatePresence mode="wait">
  <motion.div
    key={slideIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
      {heroData[slideIndex].heading}
    </h2>
    <p className="text-2xl md:text-3xl">
      {heroData[slideIndex].text}
    </p>
  </motion.div>
</AnimatePresence>
        
  <Button
            onClick={() => navigate("/contact")}
            text="Contact Us Now"
            style="font-bold text-2xl text-[#dcb421] bg-transparent p-1 border-2 border-[#dcb421] text-nowrap transition-all duration-300 hover:scale-105 hover:bg-[#dcb421] hover:text-white"
          /> 
          
        
        </div>
        <div className="mt-12 flex gap-2 self-center py-4 z-10">
          {heroData.map((data, index) => {
            return (
              <span
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 
  ${index === slideIndex && "bg-yellow-400"}
  hover:bg-white bg-gray-400`}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
