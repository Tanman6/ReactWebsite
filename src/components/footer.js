import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      BookMyDealers Home
    </Nav.Link>
        <p class="company-description">The all in one solution for booking dealers for your Casino events</p>
        <p>
            Brought to you by
        </p>
             <a href="https://Tanman6.github.io" target="_blank">
                 Tanner Syx</a>
                 <br></br>
                 <p>
                  and
                  </p>
                 <a href="https://" target="_blank">Elijah Heath</a>

                 <p>
                    <br></br>
                    <a href="#TopOfPage"> Return to top of page</a>
                </p>

        <span className="copyright-notice">&copy;2022 Bookmydealers. All rights reserved.</span>

    

</footer>
);

export default Footer;
