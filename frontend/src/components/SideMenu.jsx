import React, { useState } from "react";
import { navLinks } from "../constants";

const SideMenu = () => {
  const [isTrue, setIsTrue] = useState(true);
  const toggleSidebar = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div
      className={` min-h-screen flex justify-center  bg-black 
    
    ${isTrue ? "block" : "hidden"}
    
    `}
    >
      <ul className="flex flex-col  justify-center  gap-24 ">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className=" block font-montserrat leading-normal text-lg text-white font-bold hover:underline "
              onClick={()=>setIsTrue(false)}
            >
              
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="absolute right-16 top-6  hover:text-slate-300 text-white  font-montserrat text-3xl   cursor-pointer"
        onClick={toggleSidebar}
      >
        X
      </div>
    </div>
  );
};

export default SideMenu;
