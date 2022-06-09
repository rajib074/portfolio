import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import Testimonials from './Component/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>

    </div>
  );
}

export default App;
