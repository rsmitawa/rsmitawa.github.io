import React from "react";
import './style.css';
import { ProjectsData } from "../common/Constant";

export const Projects = () => {
  return (
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">
              A glimpse of the projects I've been working on
            </h3>
            <div id="portfolio-button-container">
              <button
                class="btn btn-secondary active"
                data-portfolio-section="all"
              >
                Show all
              </button>
              {ProjectsData.map(project => <button class="btn btn-secondary" data-portfolio-section="mining">
                {project.type}
              </button>)}


              <button
                class="btn btn-secondary"
                data-portfolio-section="dataviz"
              >
                Dataviz
              </button>
              <button class="btn btn-secondary" data-portfolio-section="paper">
                Scientific paper
              </button>
              <button
                class="btn btn-secondary"
                data-portfolio-section="dashboard"
              >
                Dashboard
              </button>
              <button class="btn btn-secondary" data-portfolio-section="shiny">
                Shiny
              </button>
            </div>
            <br />
          </div>
        </div>
        <br />
        <br />
        <div id="portfolio-items" class="row">
          {ProjectsData.map(project => <>
            <ProjectCard project={project} />
          </>
          )}
        </div>
      </div>
    </section>
  );
};


const ProjectCard = ({ project }) => {
  return <div class="col-md-3 col-sm-6 portfolio-item show column dataviz paper dashboard shiny">
    <a class="portfolio-link" data-toggle="modal" href="#ukbGeoApp">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <p>{project.name}</p>
          <hr />
          <p class="explanation_portfolio">
            Assessing the geographic distribution of genetic traits
            <br />
          </p>
        </div>
      </div>
      <img class="img-fluid" src="img/UKB_geo.png" alt="" />
    </a>
    <ProjectDetails />
  </div>
}



const ProjectDetails = () => {
  return <center>
    <div class="portfolio-modal modal fade" id="terresInovia" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog h-100">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <div class="modal-body">
                  <img src="img/portfolio/TI4.png" width="180px" />
                  <h4>Dashboard for <i>Terres Inovia</i></h4>
                  <p style={{ maxWidth: "600px" }}>Creation of a dashboard to explore the database of a
                    private company.
                  </p>
                  <br /><br />
                  <div style={{ textAlign: "left" }}>
                    <h6>Description</h6>
                    <hr />
                    <p><a href="http://www.terresinovia.fr">Terres Inovia</a> is a French company
                      carrying out applied
                      research on oilseed plants and protein crop. It phenotypes the main
                      varieties of 20 crop species
                      in many locations for several traits every year. This information is stored
                      in a massive
                      <code>SQL</code> database.
                    </p>
                    <p>I created a <code>dashboard</code> allowing to explore these data. It allows
                      to quickly
                      understand what variety performs well in what kind of environmental
                      condition. It thus has a
                      direct impact on advices provided to farmer in France.</p>
                    <p>The dashboard was created using <code>R</code> and <code>Shiny</code>. It
                      requires several
                      <code>HTML widgets</code> to create interactive graphs, and specific
                      packages to interact with
                      the database. Here is a screenshot of the welcome page of the application:
                    </p>
                    <center><img src="img/portfolio/TI1.png" width="80%" /></center>
                    <br /><br />
                    <h6>Read more</h6>
                    <hr />
                    <span>I can't provide more information on this project for privacy
                      reasons.</span>
                    <br /><br /><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </center>
}


const ProjectTabs = () => {
  return <div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      {ProjectsData.map(project => (
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id={project.id} data-bs-toggle="pill" data-bs-target={`#${project.id}`} type="button" role="tab" aria-controls="pills-home" aria-selected="true">{project.name}</button>
        </li>
      ))}
    </ul>
    <div class="tab-content" id="pills-tabContent">
      {ProjectsData.map(project => (
        <div class="tab-pane fade show active" id={project.id} role="tabpanel" aria-labelledby="pills-home-tab">{project.name}</div>
      ))}
    </div>
  </div>
}