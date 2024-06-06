import {Close} from "@mui/icons-material"

const MenuItems = ({showMenu, active}) => {
  return (
    <ul className={active ? "flex-col flex items-center fixed inset-0 justify-center bg-black/50 backdrop-blur-sm gap-8 p-8 text-2xl md:hidden" : "hidden"}>
        <Close className="fixed top-6 right-6 scale-150" onClick={showMenu}/>
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
  );
};

export default MenuItems;
