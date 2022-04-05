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
            <Link to="/">Home</Link>
          </div>
          {/* <a class="js-scroll-trigger" href="#page-top">
                HOME
            </a> */}
          <button
            class="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto nav_list">
              <li class="nav-item">
                <Link to="/intro">Intro</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1qN-s5pEF1h-nEb_Zw0foWrNWl5MUKT2njVpVh2pG95U/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrar noreferrer"
                >
                  Resume
                </a>
                {/* <Link to="/resume">Resume</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
