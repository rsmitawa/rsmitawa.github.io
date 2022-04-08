import React from "react";

export const Portfolio = () => {
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
              <button class="btn btn-secondary" data-portfolio-section="mining">
                Data mining
              </button>
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
          <div class="col-md-3 col-sm-6 portfolio-item show column dataviz paper dashboard shiny">
            <a class="portfolio-link" data-toggle="modal" href="#ukbGeoApp">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Genetics in the UK</p>
                  <hr />
                  <p class="explanation_portfolio">
                    Assessing the geographic distribution of genetic traits
                    <br />
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column dataviz paper dashboard shiny">
            <a class="portfolio-link" data-toggle="modal" href="#genMapComp">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Genetic Map Comparator</p>
                  <hr />
                  <p class="explanation_portfolio">
                    An online tool to compare genetic maps. Published in
                    <i>Bioinformatics</i>
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column dataviz dashboard shiny">
            <a class="portfolio-link" data-toggle="modal" href="#terresInovia">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Dashboard for Terres Inovia</p>
                  <hr />
                  <p class="explanation_portfolio">
                    A dashboard allowing to quickly access information in
                    <i>Terres Inovia</i> database
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column dataviz paper shiny">
            <a class="portfolio-link" data-toggle="modal" href="#comoProject">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>The Como Project</p>
                  <hr />
                  <p class="explanation_portfolio">
                    Webpage describing a study of interconnection between mental
                    disorders. Published in <i>JAMA Psychiatry</i>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column dataviz mining">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#authorRelation"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Co-authorship network</p>
                  <hr />
                  <p class="explanation_portfolio">
                    Visualize how all the co-authors of my previous supervisor
                    are inter connected.
                    <br />
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show  column dataviz ">
            <a class="portfolio-link" href="blog/dataToViz.html">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>From data to viz</p>
                  <hr />
                  <p class="explanation_portfolio">
                    A classification of chart types based on input data format
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column dashboard shiny mining">
            <a class="portfolio-link" data-toggle="modal" href="#greenTech">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>GreenTech Challenge</p>
                  <hr />
                  <p class="explanation_portfolio">
                    A dataviz challenge on water pollution in France. Third
                    price at the
                    <i>GreenTech Challenge.</i>
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column paper dashboard shiny">
            <a class="portfolio-link" data-toggle="modal" href="#unics">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>UNICS</p>
                  <hr />
                  <p class="explanation_portfolio">
                    Online tool to estimate standard error of allele frequency
                    in pool-sequencing experiments. Published in{" "}
                    <i>Molecular Ecology</i>
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div
            class="col-md-3 col-sm-6 portfolio-item show column mining"
            // style="background-color: white;"
          >
            <a
              class="portfolio-link"
              target="_blank"
              href="https://holtzy.github.io/Crypto-Arbitrage/"
              rel="noreferrer"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Crypto Arbitrage</p>
                  <hr />
                  <p class="explanation_portfolio">
                    A data driven study of crypto arbitrage feasability.
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/UKB_geo.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column mining">
            <a class="portfolio-link" data-toggle="modal" href="#surfers">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Where Surfers travel</p>
                  <hr />
                  <p class="explanation_portfolio">
                    Harvesting millions of tweets to understand where surfer
                    travel
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/Surf.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column paper mining">
            <a
              class="portfolio-link"
              target="_blank"
              href="https://link.springer.com/article/10.1007/s00122-017-2904-6"
              rel="noreferrer"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>
                    Wheat resistance to
                    <br />
                    the WSSMV virus
                  </p>
                  <hr />
                  <p class="explanation_portfolio">
                    A scientific publication in Theoretical and Applied
                    Genetics.
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/WSSMV.png" alt="" />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 portfolio-item show column paper mining">
            <a
              class="portfolio-link"
              target="_blank"
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0154609"
              rel="noreferrer"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <p>Genotyping by sequencing</p>
                  <hr />
                  <p class="explanation_portfolio">
                    Genotyping by Sequencing Using Specific Allelic Capture to
                    Build a High-Density Genetic Map of Durum Wheat
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/capture.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
