import React from "react";

const Manufacturer = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 text-center lg:w-1/3">
              <h1 className="m-3 text-3xl">Home Page</h1>
              <div className="h-[550px] overflow-hidden">
                <img src="https://i.ibb.co/RpgnQ8Z/vitic-1.png" alt="car!" />
              </div>
            </div>
            <div className="p-4 text-center lg:w-1/3">
              <h1 className="m-3 text-3xl">LogIn Page</h1>

              <div className="h-[550px] overflow-hidden">
                <img src="https://i.ibb.co/Lg3vKXv/vitic-4.png" alt="car!" />
              </div>
            </div>
            <div className="p-4 text-center lg:w-1/3">
              <h1 className="m-3 text-3xl">Dashbord</h1>

              <div className="h-[550px] overflow-hidden">
                <img
                  className=""
                  src="https://i.ibb.co/xCcmCQH/vitic-2.png"
                  alt="car!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturer;
