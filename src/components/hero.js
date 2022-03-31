import React from "react";

import poker from "../assets/poker.jpeg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={poker} alt="logo"/>
    <h1 className="mb-4">BookMyDealers</h1>
  </div>
);

export default Hero;
