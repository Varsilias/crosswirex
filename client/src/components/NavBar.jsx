import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="container flex justify-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="logout-button">
        <button className="p-2 flex justify-center items-center text-white bg-[#4834D4] rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
