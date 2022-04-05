import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Footer = () => (
  <footer className="footer">
    
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      BookMyDealers
    </Nav.Link>
        <p className="footer">The all in one solution for booking dealers for your Casino events</p>
        <p className="footer">Brought to you by</p>
        <p className="footer" href="https://Tanman6.github.io" target="_blank" rel="noopener noreferrer">Tanner Syx</p>
        <p className="footer"> and </p>
        <p className="footer" href="https://" target="_blank" rel="noopener noreferrer">Elijah Heath</p>
        <p className="footer">&copy;2022 Bookmydealers. All rights reserved.</p>
      </footer>
);

export default Footer;
