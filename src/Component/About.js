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
              <h1 className="text-2xl font-bold">
                I'M <br /> RAJIB SARKAR <br /> WEB DESIGNERA
              </h1>
              <p className="py-6">
                I'm a Web Designer and Developer based in Bangladesh. I strives
                to build immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>
              <h2 className="text-2xl font-bold">Skills</h2>
              <p>
                • HTML5, CSS3, Bootstrap, Tailwind Css.
                <br />• React.js, React Bootstrap, Daisy UI, React Query.
                <br />• Node.js, Express.js, MongoDB, JWT .
              </p>

              <h2 className="text-2xl font-bold">Education</h2>
              <p>
                Technical School & College Brahmanbaria
                <br />
                H.S.C(2014) GPA 4.28 (Science).{" "}
              </p>

              <h2 className="text-2xl  font-bold">Contact</h2>
              <p className="text-blue-700">
                <a href="mailto:rajibsarkar074@gmail.com">
                  rajibsarkar074@gmail.com
                </a>
                <br />
                <a href="https://www.facebook.com/rajib074">Facebook</a>
                <br />
                <a href="https://github.com/rajib074">GitHub</a>
                <br />
                <a href="https://www.linkedin.com/in/rajib-sarkar-193854140/">
                  LinkedIn
                </a>
                <br />
                <a href="https://www.fiverr.com/rajib074">Fiverr</a>
              </p>
              <h1 className="text-2xl  font-bold">Address</h1>
              <p>
                East Paik Para, Brahmanbaria sadar, Bangladesh. +8801945250037
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
