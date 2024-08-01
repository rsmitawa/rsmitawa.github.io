import React from "react";
import "./style.css";

export const Intro = () => {

  return (
    <section id="description" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-lg-4 text-end pt-2">
            <img
              class="img-fluid img_desc"
              src="/img/ramesh_profile.jpeg"
              alt="Ramesh Mitawa profile"
            />
          </div>
          <div class="col-lg-8 text-start">
            <p>Hello! I'm Ramesh Mitawa</p>
            <p>
              a Data Scientist passionate about leveraging data to drive meaningful insights and solutions. With a Master of Science in Data Science from <a href="https://www.trentu.ca/" target="_blank" rel="noreferrer" > Trent University </a>and a Bachelor of Engineering in Computer Science from <a href="https://www.chitkara.edu.in/" target="_blank" rel="noreferrer" > Chitkara University</a>, I bring a unique blend of academic rigor and practical experience to my work.
            </p>
            <p>Throughout my career, I have led end-to-end machine learning projects, including developing an NLP-based email maliciousness classifier at Beauceron Security and enhancing predictive analytics for surgery recommendations at Evive Software Analytics. My expertise spans a wide range of technical skills, from programming languages like Python and R to machine learning frameworks such as TensorFlow and PyTorch.
            </p>

            <a
              class="btn btn-secondary btn-l text-uppercase mx-2"
              href="https://github.com/holtzy/Publication"
              target={"_blank"}
              rel="noreferrar noreferrer"
            >
              Publications
            </a>
            <a
              class="btn btn-secondary btn-l text-uppercase mx-2"
              href="https://github.com/holtzy/Talk"
              target={"_blank"}
              rel="noreferrar noreferrer"
            >
              Talks
            </a>
            <a
              class="btn btn-secondary btn-l text-uppercase mx-2"
              href="https://twitter.com/R_Graph_Gallery"
              target={"_blank"}
              rel="noreferrar noreferrer"
            >
              Twitter
            </a>
            <a
              class="btn btn-secondary btn-l text-uppercase mx-2"
              href='https://github.com/rsmitawa'
              target={"_blank"}
              rel="noreferrar noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div class="row hide-if-small-screen work_history">
          <div class="col-lg-12 text-center">
            <svg width="1120" height="100">
              <circle
                cx="15"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="18" y="80" fill="black">
                2014
              </text>

              <line
                x1="25"
                y1="50"
                x2="1000"
                y2="50"
                style={{ stroke: "black", strokeWidth: "1.5" }}
              ></line>

              <circle
                cx="250"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="250" y="80" fill="black">
                2018
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="120"
                y="30"
                fill="black"
              >
                Bachelor of Engineering
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="120"
                y="80"
                fill="#808080"
              >
                Chitkara University
              </text>

              <circle
                cx="300"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="300" y="80" fill="black">
                2017
              </text>

              <line
                x1="300"
                y1="50"
                x2="1300"
                y2="50"
                style={{ stroke: "black", strokeWidth: "1.5" }}
              ></line>

              <circle
                cx="600"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="600" y="80" fill="black">
                2019
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="440"
                y="30"
                fill="black"
              >
                QA Developer, Data Science
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="450"
                y="80"
                fill="#808080"
              >
                Evive Software Analytics Pvt. Ltd.
              </text>
              <circle
                cx="640"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="650" y="80" fill="black">
                2021
              </text>

              <line
                x1="660"
                y1="50"
                x2="1300"
                y2="50"
                style={{ stroke: "black", strokeWidth: "1.5" }}
              ></line>

              <circle
                cx="850"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="850" y="80" fill="black">
                2022
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="750"
                y="30"
                fill="black"
              >
                Master of Science
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="750"
                y="80"
                fill="#808080"
              >
                Trent University
              </text>
              <circle
                cx="900"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="900" y="80" fill="black">
                2022
              </text>

              <line
                x1="900"
                y1="50"
                x2="1300"
                y2="50"
                style={{ stroke: "black", strokeWidth: "1.5" }}
              ></line>

              <circle
                cx="1100"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="1100" y="80" fill="black">
                2023
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="1000"
                y="30"
                fill="black"
              >
                Data Scientist
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="1000"
                y="80"
                fill="#808080"
              >
                Beauceron Security
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
