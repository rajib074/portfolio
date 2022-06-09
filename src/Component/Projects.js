import React from "react";

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
          <div class="flex flex-wrap -m-4 h-96">
            <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                <img
                  src="https://i.ibb.co/VqwxVcD/screenshot-vitacreact-web-app-2022-06-09-20-55-00.png"
                  alt="praject"
                />
              </div>
            </div>
            <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                <img
                  src="https://i.ibb.co/j4L34cm/1-3.png"
                  alt="praject"
                />
              </div>
            </div>
            <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                <img
                  src="https://i.ibb.co/XxDZ6cp/1-2.png"
                  alt="praject"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
