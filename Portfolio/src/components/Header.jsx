import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg">
          My Website
        </div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'text-white')}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'text-white')}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'text-white')}
          >
            About Us
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'text-white')}
          >
            Github
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
