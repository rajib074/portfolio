import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Independent from "./Component/Independent";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/independent" element={<Independent />} />
      </Routes>

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
