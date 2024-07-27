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
            <svg width="1000" height="100">
              <line
                x1="0"
                y1="50"
                x2="1000"
                y2="50"
                style={{ stroke: "black", strokeWidth: "1.5" }}
              ></line>

              <circle
                cx="150"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="150" y="80" fill="black">
                2012
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="70"
                y="30"
                fill="black"
              >
                Master Degree
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="70"
                y="80"
                fill="#808080"
              >
                Mtp Supagro
              </text>

              <circle
                cx="450"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="450" y="80" fill="black">
                2016
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="300"
                y="30"
                fill="black"
              >
                Data Analyst
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="300"
                y="80"
                fill="#808080"
              >
                French Institute of Research
              </text>

              <circle
                cx="650"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="650" y="80" fill="black">
                2017
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="550"
                y="30"
                fill="black"
              >
                Data analyst
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="550"
                y="80"
                fill="#808080"
              >
                Terres Inovia
              </text>

              <circle
                cx="850"
                cy="50"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#69b3a2"
              ></circle>
              <text text-anchor="middle" x="850" y="80" fill="black">
                2019
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x="750"
                y="30"
                fill="black"
              >
                Data visualization
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="750"
                y="80"
                fill="#808080"
              >
                Qld Brain Institute
              </text>

              <text
                font-size="13"
                text-anchor="middle"
                x="930"
                y="30"
                fill="black"
              >
                Data - Science - Viz
              </text>
              <text
                class="fontItalic"
                font-size="13"
                text-anchor="middle"
                x="930"
                y="80"
                fill="#808080"
              >
                Freelance
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
