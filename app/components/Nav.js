import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ColorOptions from "./ColorOptions";

const Navbar = () => {
  const [backgroundMenuVisible, setMenuVisibility] = useState(false);

  function openBackgroundMenu() {
    if (backgroundMenuVisible) {
      setMenuVisibility(false);
    } else {
      setMenuVisibility(true);
    }
  }

  return (
    <nav id="navbar" className="row">
      <a href="/">
        <p className="logo">Text Stat</p>
      </a>

      <div className="nav-menu row">
        <NavLink to="/">Home</NavLink>
        <div className="write-mode-section row">
          <ul className="row">
            <NavLink to="/focus">
              <li>Focus Mode</li>
            </NavLink>
            <li
              onClick={openBackgroundMenu}
              className={backgroundMenuVisible ? "itemSelected" : "active"}
            >
              Background
            </li>
          </ul>
        </div>
      </div>
      {backgroundMenuVisible && <ColorOptions />}
    </nav>
  );
};

export default Navbar;
