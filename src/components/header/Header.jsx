import React from "react";
import "./header.css";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
    </header>
  );
}

export default Header;
