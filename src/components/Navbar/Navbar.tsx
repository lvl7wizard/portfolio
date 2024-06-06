import { useState } from "react";
import MenuItems from "./MenuItems/MenuItems";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed top-0 w-full text-white items-center z-10 p-0 bg-transparent md:bg-black/90">
      <nav className="flex justify-between items-center">
        <div className="text-xl p-4 font-bold hidden md:block">Dave Judge</div>
        <div className="md:hidden">
          <MenuOutlined
            onClick={showMenu}
            className="fixed right-6 top-6 scale-150 cursor-pointer"
          />
        </div>
        <ul className="hidden md:flex gap-8 p-4">
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
