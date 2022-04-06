import React from "react";

export const Contact = () => {
  return (

    <section id="contact" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 text-center"></div>
                <div class="col-lg-8 text-center">
                    {/* <br><br><br> */}
                    <h2 class="section-heading text-uppercase" style={{ color: "black"}}>Contact</h2>
                    <p>Feel free to contact me for any question. For open source projects, please open an issue or pull
                        request on
                        <a href="https://github.com/holtzy/">Github</a>. If you want to follow my work, reach me on <a
                            href="https://twitter.com/R_Graph_Gallery">Twitter</a>. Otherwise, send me an email at <a
                            href="mailto:Ramesh.holtz.data@gmail.com">Ramesh.holtz.data@gmail.com</a>.
                    </p>
                    <div style={{ textAlign:"center"}}>
                        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                            href="https://github.com/holtzy/data_to_viz">Github</a>
                        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                            href="https://twitter.com/R_Graph_Gallery">Twitter</a>
                        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                            href="mailto:Ramesh.holtz.data@gmail.com">Mail</a>
                    </div>

                </div>
            </div>
        </div>
    </section>

  )
};
