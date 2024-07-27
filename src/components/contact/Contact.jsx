import React from "react";
import { githubURL, linkedinURL, mailId } from "../common/Constant";

export const Contact = () => {

  return (
    <section id="contact" class="bg-light">
      <div class="container">
        <div class="row contact-wrapper">
          <div class="contact-wrap">
            <h2
              class="section-heading text-uppercase"
              style={{ color: "black" }}
            >
              Contact
            </h2>
            <p> I am always open to new opportunities and collaborations. Feel free to reach out to me via email at  <a href={`mailto:${mailId}`}>{mailId}</a> or connect with me on  <a href={linkedinURL}>LinkedIn</a> .
            </p>
            <p>I look forward to the opportunity to discuss how my skills and experiences can contribute to your team's success.</p>

            <div style={{ textAlign: "center" }}>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href={githubURL}
              >
                Github
              </a>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href={linkedinURL}
              >
                LinkedIn
              </a>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href={`mailto:${mailId}`}
              >
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
