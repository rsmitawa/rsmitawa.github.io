import { Routes, Route, Link, Switch } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/my_portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Switch>
      </Routes>
    </div>
  );
};

export default App;
