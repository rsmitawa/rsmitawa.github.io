import { Routes, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import "./App.css";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
