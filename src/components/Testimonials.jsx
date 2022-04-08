import React from "react";
import "./testimonials.css";

export const Testimonials = () => {
  return (
    <section id="testimonial">
      <div class="container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                  <img
                    src="img/reference/DGouache.png"
                    width="170px"
                    alt="profile_img"
                  />
                </div>
                <div class="col-lg-8 col-md-6 col-sm-6 text-center text-md-left">
                  <br />
                  <p class="testimonials-desc">
                    <i>
                      "[...] Ramesh did an absolutely brilliant job. He has
                      multiple skills and qualities making him a great data
                      science project member, and even leader : excellent
                      knowledge and learning ability of diverse statistical and
                      data management tools obviously, and a real knack for data
                      viz."
                    </i>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/david-gouache-88097462/">
                      D. Gouache
                    </a>{" "}
                    -{" "}
                    <span class="testimonials-desigination">
                      <i>
                        Deputy Director at{" "}
                        <a href="http://www.terresinovia.fr">Terres Inovia</a>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                  <img
                    src="img/reference/JDavid.jpg"
                    width="170px"
                    alt="profile_img"
                  />
                </div>
                <div class="col-lg-8 col-md-6 col-sm-6 text-center text-md-left">
                  <br />
                  <p class="testimonials-desc">
                    <i>
                      "Ramesh always performed with outstanding skills and
                      impressive capacity for adaptation and efficiency. His job
                      was crucial for the publication of important results.
                      [...] I thus highly recommend him for any work concering
                      framing and analysis of huge data sets."
                    </i>
                  </p>
                  <p>
                    <a href="https://www.researchgate.net/profile/Jacques_David4">
                      J. David
                    </a>{" "}
                    -{" "}
                    <span class="testimonials-desigination">
                      <i>
                        Professor at{" "}
                        <a href="https://www.montpellier-supagro.fr">
                          Montpellier Supagro
                        </a>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item active">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                  <img
                    src="img/reference/SGlemin.jpg"
                    width="170px"
                    alt="profile_img"
                  />
                </div>
                <div class="col-lg-8 col-md-6 col-sm-6 text-center text-md-left">
                  <br />
                  <p class="testimonials-desc">
                    <i>
                      "I worked with Ramesh for several collaborative projects
                      on genomic data analysis. Ramesh was very efficient and
                      highly reactive to our requests and he was also autonomous
                      to find the best solutions to the problems we submitted to
                      him."
                    </i>
                  </p>
                  <p>
                    <a href="https://www.researchgate.net/profile/Jacques_David4">
                      S. Glémin
                    </a>{" "}
                    -{" "}
                    <span class="testimonials-desigination">
                      <i>
                        Senior Researcher at{" "}
                        <a href="https://www.montpellier-supagro.fr">CNRS</a>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                  <img
                    src="img/reference/JMGrath.jpg"
                    width="170px"
                    alt="profile_img"
                  />
                </div>
                <div class="col-lg-8 col-md-6 col-sm-6 text-center text-md-left">
                  <br />
                  <p class="testimonials-desc">
                    <i>
                      "Ramesh has taught me everything I know about data
                      visualization! He taught my group how to display data in
                      clever ways, and has been responsible for our recent
                      interactive website related to psychiatric epidemiology.
                      <br />
                      <br />
                      Also, he is a super-fast and efficient bioinformatician.
                      He has set up a pipeline to handle large genetic datasets
                      and apply modern analytic methods to explore the genetic
                      architecture of traits and disorders.
                      <br />
                      <br />
                      He is a super-bright guy – I can highly recommend him!"
                    </i>
                  </p>
                  <p>
                    <a href="https://twitter.com/John_J_McGrath?lang=en">
                      John McGrath
                    </a>{" "}
                    -{" "}
                    <span class="testimonials-desigination">
                      <i>
                        Senior Researcher at the{" "}
                        <a href="https://qbi.uq.edu.au">
                          Queensland Brain Institute
                        </a>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};
