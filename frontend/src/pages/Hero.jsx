import React from "react";
import HeroImage from "../assets/HeroImage.svg";
import { IoSearch } from "react-icons/io5";

function Hero() {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 md:flex-row">
      <div className="mt-10 md:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl md:text-left md:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl md:text-left z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id
          ex non hic eius facilis libero animi ipsam c
        </p>
        <div className="flex md:mt-6 xl:mt-10 flex-col gap-y-2.5 mt-10 relative">
          <div className="relative">
            <IoSearch
              size={30}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            ></IoSearch>
            <input
              className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:py-4 placeholder:font-bold font-semibold text-dark-soft rounded-lg pl-12  pr-3 w-full py-3 focus:outline-none"
              type="text"
              placeholder="Search articles"
            />
          </div>
          <button className="w-full md:-translate-y-1/2 md:w-fit md:py-2 bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2">
            Search{" "}
          </button>
        </div>
        <div className="flex mt-4 flex-col md:items-center md:flex-row md:flex-nowrap md:gap-x-4 md:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 md:mt-4 md:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex items-center flex-wrap gap-x-2.5 gap-y-2.5 md:mt-4">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img className="w-full" src={HeroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero;
