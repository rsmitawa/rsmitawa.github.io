import React from "react";

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
            <p>
              Feel free to contact me for any question. For open source
              projects, please open an issue or pull request on &nbsp;
              <a href="https://github.com/rsmitawa">Github</a>. If you want to
              follow my work, reach me on &nbsp;
              <a href="https://twitter.com/R_Graph_Gallery">Twitter</a>.
              Otherwise, send me an email at &nbsp;
              <a href="mailto:rsmitawa@gmail.com">rsmitawa@gmail.com</a>.
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="https://github.com/rsmitawa"
              >
                Github
              </a>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="https://twitter.com/R_Graph_Gallery"
              >
                Twitter
              </a>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="mailto:rsmitawa@gmail.com"
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
