import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col m-auto lg:flex-row">
            <img
              src="https://i.ibb.co/0rkgr1d/IMG-2495-01-removebg-preview.png"
              className="m-5 max-w-sm w-full rounded-full shadow-5xl"
            />
            <div className="m-5 lg:w-96">
              <h1 className="text-1xl font-bold"> HI THERE !</h1>
              <h1 className="text-2xl font-bold">I'M RAJIB SARKAR WEB DESIGNERA</h1>
              <p className="py-6">
                I'm a Web Designer and Developer based in Bangladesh. I strives
                to build immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>
              <button className="btn btn-primary">
                more
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
