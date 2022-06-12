import React from "react";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Projects from "./Projects";
import Skils from "./Skils";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      
      <Header></Header>
      <Projects></Projects>
      <Skils></Skils>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
