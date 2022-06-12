import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Blogs from "./Component/Blogs";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Independent from "./Component/Independent";
import Manufacturer from "./Component/Manufacturer";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";
import Warehouse from "./Component/Warehouse";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/independent" element={<Independent />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer></Footer>


      {/* <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer> */}

    </div>
  );
}

export default App;
