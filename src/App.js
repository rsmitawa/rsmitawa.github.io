import { Routes, Route } from "react-router-dom";
import "./App.css";
import Testimonials from "./components/testimonial";
import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Home from "./components/home";
import { Services } from "./components/Services";
import Contact from "./components/contact";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
