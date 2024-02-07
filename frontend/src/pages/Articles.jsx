import React from "react";
import ArticlesCard from "../components/ArticlesCard";
import { FaArrowRightLong } from "react-icons/fa6";

function Articles() {
  return (
    <section className="flex flex-col container mx-auto  px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10 ">
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"></ArticlesCard>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"></ArticlesCard>
      </div>

      <button className="mx-auto flex items-center justify-center gap-x-2 hover:bg-blue-700 hover:text-white duration-300 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span>
        <FaArrowRightLong size={28}></FaArrowRightLong>
      </button>
    </section>
  );
}

export default Articles;
