import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <img className="mr-5" src={logo} width="50" alt="ibm logo"/>
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;