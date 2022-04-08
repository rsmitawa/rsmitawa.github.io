import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      {/* <div className="profile_img">
        <img
          src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_780604.jpg"
          alt="Ramesh Profile"
        />
      </div> */}
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
                <a
                  href="https://docs.google.com/document/d/1qN-s5pEF1h-nEb_Zw0foWrNWl5MUKT2njVpVh2pG95U/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrar noreferrer"
                  class="nav-link js-scroll-trigger"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
