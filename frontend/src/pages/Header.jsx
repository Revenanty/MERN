import React, { useState } from "react";
import pic from "../assets/pic.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const navItmesInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["Abouts", "Contact us"] },
  { name: "Pricing ", type: "link" },
  { name: "Faq", type: "link" },
];
const NavItem = ({ item }) => {
  const [dropDown, setDropdown] = useState(false);
  return (
    <>
      <li className="relative group">
        {item.type === "link" ? (
          <>
            <a href="/" className="px-4 py-2 group-hover:text-blue-500">
              {item.name}
            </a>
            <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
              /
            </span>
          </>
        ) : (
          <div className="flex flex-col items-center">
            {" "}
            <button className="px-4 py-2 group-hover:text-blue-500 flex gap-x-2 items-center">
              <span>{item.name}</span>
              <IoIosArrowDown
                size={17}
                className="cursor-pointer"
                onClick={() => setDropdown(!dropDown)}
              ></IoIosArrowDown>
            </button>
            <div
              className={`${
                !dropDown ? "block" : "hidden"
              } md:hidden transition-all duration-500 pt-4 md:absolute md:bottom-0 md:right-0 md:transform md:translate-y-full md:group-hover:block w-max`}
            >
              <ul className="flex shadow-lg rounded-lg flex-col overflow-hidden">
                {item.items?.map((page) => (
                  <a
                    key={page}
                    href="/"
                    className="hover:bg-blue-500  hover:text-white px-4 py-2 text-black md:text-dark-hard"
                  >
                    {page}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="sticky top-0 left-0 right-0 bg-white">
        <header className="w-11/12 m-auto p-5 flex justify-between items-center">
          <div>
            <img src={pic} className="w-16 h-auto" alt="" />
          </div>
          <div className="md:hidden z-50">
            {open ? (
              <IoClose
                size={35}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <IoMenu
                size={35}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          <div
            className={`${
              open ? "right-0" : " -right-full"
            }    py-4 md:py-0 z-[49] gap-x-9 items-center fixed -top-[40%] bottom-0 transition-all duration-300 md:static flex flex-col md:flex-row justify-center md:justify-end w-full md:w-auto`}
          >
            <ul className="flex flex-col items-center gap-y-5 md:flex-row gap-x-2 font-semibold">
              {navItmesInfo.map((item) => (
                <NavItem key={item.name} item={item}></NavItem>
              ))}
            </ul>
            <button className="font-semibold ring-2 ring-blue-500 md:mt-0 mt-5 px-5 py-2 rounded-full hover:bg-blue-500 duration-300 hover:text-white">
              Sign in
            </button>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
