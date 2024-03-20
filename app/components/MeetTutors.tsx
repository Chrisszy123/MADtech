import React from "react";
import CardCarousel from "./cardCarousel/CardCarousel";

const cards = [
  {
    title: "Nuel Wogundu ",
    description: "Product Designer",
    image: "/images/9.png",
  },
  {
    title: "Goodluck gabriel",
    description: "fullstack developer",
    image: "/images/bg2.png",
  },
  {
    title: "ameh khadeejah",
    description: "community manager",
    image: "/images/bg3.png",
  }
  // Add more card objects as needed
];

const MeetTutors = () => {
  return (
    <div className="flex flex-col md:gap-[2rem] gap-[1rem] md:mt-[4rem] mt-[2rem] justify-center items-center">
      <h3 className="text-[20px] uppercase font-[600] text-[#030156]">Meet The Tutors</h3>
      <CardCarousel cards={cards} />
    </div>
  );
};

export default MeetTutors;
