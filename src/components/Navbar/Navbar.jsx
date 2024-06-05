import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed top-0 w-full text-white items-center z-10 p-4 md:p-0 md: flex-none">
      <nav className="flex justify-end md:justify-center">
        <div className="absolute right-8 top-4 scale-150 md:hidden">
          <MenuOutlined onClick={showMenu} />
        </div>
        <ul className="hidden md:flex gap-8 p-4 uppercase bg-black/90">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};