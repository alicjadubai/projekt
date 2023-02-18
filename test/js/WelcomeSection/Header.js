import React, { useState } from "react";

const Header = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideBar = document.querySelector(".sidebar ");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen === false) {
      sideBar.classList.add("hide");
      menuBtn.classList.add("open");
    } else {
      sideBar.classList.remove("hide");
      menuBtn.classList.remove("open");
    }
  };
  return (
    <header className="masthead">
      <div className="sidebar-switcher">
        <div onClick={handleClick} className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
