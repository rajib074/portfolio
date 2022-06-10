import React from "react";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skils from "./Skils";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      
      <Header></Header>
      <Skils></Skils>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
