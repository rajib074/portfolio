import React from "react";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Independent from "./Independent";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      
      <Header></Header>
      <Independent></Independent>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
