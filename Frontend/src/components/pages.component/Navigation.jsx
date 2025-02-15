import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg p-2 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/service" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/garalry" className="hover:text-blue-500">Gallery</Link></li>
        </ul>

        {/* Profile & Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <ul className="space-y-4 text-lg">
            <li><Link to="/" className="block">Home</Link></li>
            <li><Link to="/service" className="block">Services</Link></li>
            <li><Link to="/garalry" className="block">Gallery</Link></li>
            <li className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 rounded-full" />
              <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
