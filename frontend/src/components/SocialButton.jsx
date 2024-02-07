import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";

function SocialButton({ url, title }) {
  return (
    <section className="w-full flex gap-x-4">
      <a href="/" target="_blank" rel="noreferrer">
        <FaFacebook className="text-[#4776db] w-10 h-auto"></FaFacebook>
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <FaReddit className="text-red-600 w-10 h-auto"></FaReddit>
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <BsTwitterX className="text-black w-10 h-auto"></BsTwitterX>
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <FaWhatsappSquare className="text-green-500 w-10 h-auto"></FaWhatsappSquare>
      </a>
    </section>
  );
}

export default SocialButton;
