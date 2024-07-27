import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">

      <nav class="navbar navbar-expand-lg fixed-top navbar-shrink" id="mainNav">
        <div class="container">
          <div className="home_nav">
            <Link to="/" class="js-scroll-trigger">
              HOME
            </Link>
          </div>

          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fa fa-bars"></i>
          </button>

          <div class="navbar-collapse collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto nav_list">
              <li class="nav-item">
                <Link to="/intro" class="nav-link js-scroll-trigger">
                  Intro
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/services" class="nav-link js-scroll-trigger">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio" class="nav-link js-scroll-trigger">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/testimonials" class="nav-link js-scroll-trigger">
                  Testimonials
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link js-scroll-trigger">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <a href='Resume/RameshMitawa_Resume.pdf' target="_blank" class="nav-link js-scroll-trigger">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
