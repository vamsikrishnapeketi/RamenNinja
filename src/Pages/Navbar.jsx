import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex bg-black w-full text-white p-3 justify-between">
      <span className="text-white">Ramen-Ninja</span>
      <div className="text-white flex gap-4">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/order">Order</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <a href="#contact">Contact</a>
        </span>
      </div>
    </div>
  );
};
