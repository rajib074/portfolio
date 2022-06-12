import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-yellow-400">
        <div className="navbar-start "></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <nav>
                <Link to="/">Home</Link>
              </nav>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1QJHEcEibx5WgWeNbFIK0DJlqtyCIPbDG/view?usp=sharing">
                Resume
              </a>
            </li>
            <li>
              <nav>
                <Link to="/project">Projects</Link>
              </nav>
            </li>
            <li>
              <nav>
                <Link to="/blogs">Blogs</Link>
              </nav>
            </li>
            <li>
              <nav>
                <Link to="/about">About</Link>
              </nav>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-left">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
            >
              <li>
              <nav>
                <Link to="/">Home</Link>
              </nav>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1QJHEcEibx5WgWeNbFIK0DJlqtyCIPbDG/view?usp=sharing">
                Resume
              </a>
            </li>
            <li>
              <nav>
                <Link to="/project">Projects</Link>
              </nav>
            </li>
            <li>
              <nav>
                <Link to="/blogs">Blogs</Link>
              </nav>
            </li>
            <li>
              <nav>
                <Link to="/about">About</Link>
              </nav>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
