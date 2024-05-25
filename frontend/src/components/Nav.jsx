import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import SideMenu from "./SideMenu";

const Nav = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const toggleSidebar = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:font-medium"
              >
                
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={toggleSidebar}
        >
          <img src={hamburger} alt="menu" width={25} height={25} />
        </div>
      </nav>

      <div className="fixed top-0 left-0 right-0">{sideMenu && <SideMenu />}</div>
    </header>
  );
};

export default Nav;
