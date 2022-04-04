import { Routes, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />
          <Route path="/resume" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
