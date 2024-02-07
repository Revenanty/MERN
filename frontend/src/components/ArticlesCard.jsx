import React from "react";
import post1 from "../assets/post1.jpg";
import profile from "../assets/post-profile.svg";
import { MdVerified } from "react-icons/md";

function ArticlesCard({ className }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${className}`}
    >
      <img
        src={post1}
        alt=""
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl">
          Future of work
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Majority of people will work in jobs that dont exist today.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img src={profile} className="w-9 h-9  md:w-16 md:h-16" alt="" />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold italic text-dark-soft text-sm">
              Viola Manisa
            </h4>
            <div className="flex items-center gap-2">
              <span
                className="bg-[#3a86ff] w-fit p-1.5 rounded-full
              "
              >
                <MdVerified size={15} className=" text-white"></MdVerified>
              </span>
              <span className="italic text-dark-light text-sm">
                Verified Writer
              </span>
            </div>
          </div>
          <span>02 May</span>
        </div>
      </div>
    </div>
  );
}

export default ArticlesCard;
