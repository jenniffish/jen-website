import React from "react";

// src/components/Navbar.js
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">My Portfolio</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#resume" className="hover:underline">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
