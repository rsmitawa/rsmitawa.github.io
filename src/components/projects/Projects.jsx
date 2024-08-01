import React, { useEffect, useState } from "react";
import './style.css';
import axios from "axios";

export const Projects = () => {
  const [publicRepos, setPublicRepos] = useState([]);

  const fetchGitPublicRepos = async () => {
    const repos = await axios.get('https://api.github.com/users/rsmitawa/repos');
    setPublicRepos(repos.data)
  }

  useEffect(() => {
    fetchGitPublicRepos()
  }, [])

  console.log({ publicRepos })

  return (
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Projects</h2>
            <h3 class="section-subheading text-muted">
              A glimpse of the projects I've been working on
            </h3>
            <div id="portfolio-button-container">
              {publicRepos.map(project => <button class="btn btn-secondary" data-portfolio-section="mining">
                {project.name}
              </button>)}
            </div>
            <br />
          </div>
        </div>
        <br />
        <br />
        <div id="portfolio-items" class="row">
          {publicRepos.map(project => <>
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
    <a href={project.html_url} target="_blank" rel="noreferrer" content="git-url">
      <div class="portfolio-link">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <p>{project.name}</p>
            <hr />
            <p class="explanation_portfolio">
              {project.description}
              <br />
            </p>
            <p>Technologies: {project.language}</p>
          </div>
        </div>
        <img class="img-fluid" src="img/UKB_geo.png" alt="" />
      </div>
    </a>
  </div>
}

