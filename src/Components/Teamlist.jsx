import React from "react";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import Card6 from "./Card6";

const Teamlist = () => {
  const bioData = [
    {
      id: 1,
      img: team1,
      role: "Electrician",
      name: "Jack Wilshere",
      email: "electrician1@electro.com",
      phone: "+2340011887711",
    },
    {
      id: 2,
      img: team2,
      role: "Wirin Technician",
      name: "Jack Wilshere",
      email: "electrician1@electro.com",
      phone: "+2340011887711",
    },
    {
      id: 3,
      img: team3,
      role: "Service Manager",
      name: "Jack Wilshere",
      email: "electrician1@electro.com",
      phone: "+2340011887711",
    },
    {
      id: 4,
      img: team4,
      role: "Accountant",
      name: "Jack Wilshere",
      email: "electrician1@electro.com",
      phone: "+2340011887711",
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
          />
        </div>
      ))}
    </div>
  );
};

export default Teamlist;
