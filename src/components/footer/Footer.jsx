import React from "react";
import Social from "../common/Social";

export const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright © Ramesh Mitawa 2022</span>
          </div>
          <div class="col-md-4">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};
