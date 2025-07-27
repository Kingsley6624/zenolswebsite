import React from "react";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.jpg";
import Card6 from "./Card6";
import { link } from "framer-motion/client";

const Teamlist = () => {
  const bioData = [
    {
      id: 1,
      img: team1,
      role: "C.E.O",
      name: "Nelson Onwumere",
      email: "nelson.onwumere@zonelsengineering.com.ng",
      phone: "+2348064845313",
      link: "mailto:nelson.onwumere@zonelsengineering.com.ng",
    },
    {
      id: 2,
      img: team2,
      role: "Electrical Engineer",
      name: "Chinedu Ezenwafor",
      email: "kingsley.ezenwafor@zonelsengineering.com.ng",
      phone: "+2349036333030",
      link: "mailto:kingsley.ezenwafor@zonelsengineering.com.ng",
    },
    {
      id: 3,
      img: team3,
      role: "Service Manager",
      name: "Jack Wilshere",
      email: "electrician1@electro.com",
      phone: "+2340011887711",
      link: "mailto:kingsley.ezenwafor@zonelsengineering.com.ng",
    },
    {
      id: 4,
      img: team4,
      role: "Accountant",
      name: "Christiana okpako",
      email: "electrician1@electro.com",
      phone: "+2349060810705",
      link: "mailto:nelson.onwumere@zonelsengineering.com.ng",
    },
  ];
  return (
    <div className=" bg-white grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] items-center gap-10 py-6">
      {bioData.map((data) => (
        <div key={data.id}>
          <Card6
            img={data.img}
            role={data.role}
            Tname={data.name}
            email={data.email}
            phone={data.phone}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
};

export default Teamlist;
