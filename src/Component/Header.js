import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col m-auto lg:flex-row">
          <img
            src="https://i.ibb.co/VYd0VBG/IMG-2591-02-removebg-preview.png"
            className="m-5 max-w-sm w-full rounded-full shadow-5xl"
          />
          <div className="m-5 lg:w-96">
            <h1 className="text-1xl font-bold"> HI THERE !</h1>
            <h1 className="text-2xl font-bold">
              I'M RAJIB SARKAR WEB DESIGNERA
            </h1>
            <p className="py-6">
              I'm a Web Designer and Developer based in Bangladesh. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <Link className="btn btn-primary" to="/about">More about me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
