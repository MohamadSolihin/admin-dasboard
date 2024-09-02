import React from "react";
import "./navbar.css";
import NavNotice from "./NavNotice";
import NavMessges from "./NavMessges";
import NavAvatar from "./NavAvatar";
function Navbar() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessges />
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Navbar;
