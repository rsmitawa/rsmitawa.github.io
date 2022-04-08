import React from "react";
import './service.css';

export const Services = () => {
  return (
    <section id="services" class="bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center service-head">
            <p>Services</p>
            {/* <hr style="width: 100px; height: 1px; border:none;color:#333;background-color:#333;" /> */}
            <center>
              <h3 class="section-subheading text-muted">
                Let me help make better use of your data. My expertise can be
                used to clean, analyse, interpret and visualize your data.
              </h3>
            </center>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 text-center">
            <a data-toggle="modal" href="#dataManagement">
              <i class="fa fa-wrench services-logo"></i>
            </a>
            <a data-toggle="modal" href="#dataManagement">
              <h4>Data Management</h4>
            </a>
            <p>
              Data harvesting, cleaning and reshaping. Development of automated
              workflows.
            </p>
            <a data-toggle="modal" href="#dataManagement" class="plus">
              +
            </a>
          </div>

          <div class="col-lg-3 text-center">
            <a data-toggle="modal" href="#dataMining">
              <i class="fa fa-search services-logo"></i>
            </a>
            <a data-toggle="modal" href="#dataMining">
              <h4>Data Mining</h4>
            </a>
            <p>
              Data exploration, application of statistical methods, reproducible
              data analysis.
            </p>
            <a data-toggle="modal" href="#dataMining" class="plus">
              +
            </a>
          </div>

          <div class="col-lg-3 text-center">
            <a data-toggle="modal" href="#dataViz">
              <i class="fa fa-bar-chart services-logo"></i>
            </a>
            <a data-toggle="modal" href="#dataViz">
              <h4>Dataviz</h4>
            </a>
            <p>
              Creation of static and interactive dataviz and dashboards, review
              of scientific figures.
            </p>
            <a data-toggle="modal" href="#dataViz" class="plus">
              +
            </a>
          </div>

          <div class="col-lg-3 text-center">
            <a href="teaching.html">
              <i class="fa fa-university services-logo"></i>
            </a>
            <a href="teaching.html">
              <h4>Teaching &amp; Training</h4>
            </a>
            <p>
              Short talks or multi-day courses on dataviz, R, ggplot2, data
              analytics and more.{" "}
            </p>
            <a href="teaching.html" class="plus">
              +
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
