import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <div class="masthead">
      <div id="particles-js">
        <canvas
          class="particles-js-canvas-el"
          width="1834"
          height="1600"
        ></canvas>
      </div>
      <div class="textlanding">
        <p className="textlanding_name">Ramesh</p>
        <img src="/img/Home_single_big.png" alt="home" />
        <p className="textlanding_lastname">Mitawa</p>
        <div  className="hr_bottom"/>
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="https://twitter.com/R_Graph_Gallery">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-buttons">
            <a href="https://github.com/rsmitawa">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="list-inline-item social-buttons">
            <a href="https://www.linkedin.com/in/Ramesh-holtz-2477534a/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <br />
        <br />
        <p>
          Welcome to Ramesh Mitawa's <u>homepage</u>.<br />
          I'm a data analysis and data visualisation specialist currently
          working as a software engineer for
          <a href="https://www.datadoghq.com/">Datadog</a>.
        </p>

        <Link to="/intro"
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          >Visit</Link>
        <Link to="/contact"
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          >Contact</Link>
        {/* <a
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#description"
        >
          Visit
        </a>
        <a
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#contact"
        >
          Contact
        </a> */}
      </div>
      {/* <div class="arrowlanding">
        <Link to="/intro" className="js-scroll-trigger">
        <p>﹀</p>
         </Link>
      </div> */}
    </div>
  );
};
