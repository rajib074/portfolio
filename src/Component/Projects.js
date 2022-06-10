import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <section class="text-gray-600 body-font p-5 overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-5xl text-3xl font-medium title-font">
              Prajects
            </h1>
          </div>
          <div class="flex flex-wrap m-4">
            <div class=" p-4 xl:w-1/3 text-center h-96 md:w-1/2 w-full">
              <div class="h-full p-6 border border-slate-300 rounded-lg flex flex-col relative overflow-hidden">
                <img
                  src="https://i.ibb.co/VqwxVcD/screenshot-vitacreact-web-app-2022-06-09-20-55-00.png"
                  alt="praject"
                />
              </div>
              <Link className="p-5  m-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" to="/project">View Ditals</Link>            </div>
            <div class="p-4 xl:w-1/3 text-center h-96 md:w-1/2 w-full">
              <div class="h-full p-6 border border-slate-300 rounded-lg flex flex-col relative overflow-hidden">
                <img
                  src="https://i.ibb.co/j4L34cm/1-3.png"
                  alt="praject"
                />
              </div>
              <Link className="p-5  m-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" to="/independent">View Ditals</Link>            </div>
            <div>
              
            </div>
            <div class="p-4 xl:w-1/3 text-center h-96 md:w-1/2 w-full">
              <div class="h-full border border-slate-300 p-6 rounded-lg flex flex-col relative overflow-hidden">
                <img
                  src="https://i.ibb.co/XxDZ6cp/1-2.png"
                  alt="praject"
                />
              </div>
              <Link className="p-5  m-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" to="/project">View Ditals</Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
