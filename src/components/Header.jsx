import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            <Link to="/about"> About Me</Link>
          </li>
          <li>
            <Link to="/portfolio"> Portfolio</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/resume"> resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
