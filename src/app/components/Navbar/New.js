import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Links = ["Home", "About", "Services", "Contact"]; // Example links, replace with your actual links
  const [selected, setSelected] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Your Logo</div>
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <div
          className={`lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {Links.map((link) => (
            <span
              onClick={() => {
                setSelected(link);
                toggleMenu(); // Close the menu on link click
              }}
              className="uppercase cursor-pointer"
              style={{ color: selected === link ? "#e73c17" : "white" }}
              key={link}
            >
              {link}
            </span>
          ))}
        </div>
        <div
          className={`flex-grow justify-evenly items-center gap-3 flex-col lg:hidden transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {Links.map((link) => (
            <span
              onClick={() => {
                setSelected(link);
                toggleMenu(); // Close the menu on link click
              }}
              className="uppercase cursor-pointer transition-colors duration-300"
              style={{ color: selected === link ? "#e73c17" : "black" }}
              key={link}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
