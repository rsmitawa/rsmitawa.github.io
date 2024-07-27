import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Social from "../common/Social";

export const Home = () => {
  return (
    <div class="masthead home-container">
      <div class="textlanding">
        <p className="textlanding_name">Ramesh</p>
        {/* <img src="/img/Home_single_big.png" alt="home" /> */}
        <img
          src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_780604.jpg"
          alt="Ramesh Profile"
        />
        <p className="textlanding_lastname">Mitawa</p>
        <div className="hr_bottom" />
        <Social />
        <br />
        <br />
        <p>Hello! I'm Ramesh Mitawa, a Data Scientist passionate about leveraging data to drive meaningful insights and solutions. With a Master of Science in Data Science from Trent University and a Bachelor of Engineering in Computer Science from Chitkara University, I bring a unique blend of academic rigor and practical experience to my work. </p>
        <p>Throughout my career, I have led end-to-end machine learning projects, including developing an NLP-based email maliciousness classifier at Beauceron Security and enhancing predictive analytics for surgery recommendations at Evive Software Analytics. My expertise spans a wide range of technical skills, from programming languages like Python and R to machine learning frameworks such as TensorFlow and PyTorch.</p>
        <p> I am proficient in data visualization tools like Tableau and Power BI, and I have experience working with cloud services like AWS and Azure DevOps. My commitment to ethical AI practices ensures that my solutions are not only effective but also fair and unbiased.</p>

        <Link to="/intro"
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
        >Visit</Link>
        <Link to="/contact"
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
        >Contact</Link>
      </div>
    </div >
  );
};
