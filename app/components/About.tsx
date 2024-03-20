import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between md:px-24 md:py-6 px-2 py-2 md:gap-[2rem] gap-[1rem]">
      <h3 className="text-[20px] uppercase font-[600] text-[#030156] mt-[1rem] md:mt-0">About Us</h3>

      <div className="flex flex-col items-center justify-center w-[80%]">
        <span className="lg:text-[70px] md:text-[60px] text-[28px] uppercase font-[800] text-[#030156]">What is Mad Tech?</span>
        <h5 className="text-[12px] font-[400] tracking-[2px] md:w-[70%] w-[100%] text-center mt-[1rem] md:mt-0">
          Welcome to the MaD Tech Community, a space where direction and
          guidance is offered to those new to the Tech space, finding their path
          or trying to be productive with tech and business.
        </h5>
      </div>
    </div>
  );
};

export default About;
