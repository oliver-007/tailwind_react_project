import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // <nav className=" w-full flex py-6 justify-between items-center navbar">
    //   <img src={logo} alt="hoobank" className=" w-[124px] h-8  " />

    //   <ul className=" list-none hidden sm:flex justify-end items-center flex-1">
    //     {navLinks &&
    //       navLinks.map((nav, index) => (
    //         <li
    //           key={nav.id}
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
    //             index === navLinks.length - 1 ? " mr-0" : "mr-10"
    //           }  `}
    //         >
    //           <a href={`#${nav.id}`}>{nav.title}</a>
    //         </li>
    //       ))}
    //   </ul>

    //   <div className=" sm:hidden flex flex-1 justify-end items-center ">
    //     <img
    //       src={toggle ? close : menu}
    //       alt="menu"
    //       className=" w-7 h-7 object-contain "
    //       onClick={() => setToggle((prev) => !prev)}
    //     />

    //     <div
    //       className={`${
    //         toggle ? "flex" : "hidden"
    //       } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    //     >
    //       <ul className=" list-none flex flex-col justify-end items-center flex-1">
    //         {navLinks &&
    //           navLinks.map((nav, index) => (
    //             <li
    //               key={nav.id}
    //               className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
    //                 index === navLinks.length - 1 ? " mb-0" : "mb-4"
    //               }  `}
    //             >
    //               <a href={`#${nav.id}`}>{nav.title}</a>
    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className=" w-full flex py-6 justify-between items-center">
      <img src={logo} alt="logo" className=" w-[124px] h-8" />

      {/* toggle button & menu */}
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" w-7 h-7 object-contain"
          onClick={() => {
            setToggle((prev) => {
              return !prev;
            });
          }}
        />
        <div
          className={` ${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 rounded-xl mx-4 my-2 min-w-[140px] sidebar `}
        >
          <ul className=" flex flex-col flex-1 list-none justify-center items-center  ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }  font-poppins text-[16px] font-normal cursor-pointer text-white `}
              >
                <a href={`#${nav.id} `}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* nav links */}
      <ul
        className={`sm:flex hidden flex-1 list-none justify-end items-center`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` ${
              index === navLinks - 1 ? "mr-0" : "mr-8"
            } text-white cursor-pointer font-normal font-poppins text-[16px] hover:text-secondary  `}
          >
            <a href={`#${nav.id}`} className=" pb-2">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
