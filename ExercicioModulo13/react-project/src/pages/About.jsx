import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About the company</h1>
      <p>Lorem ipsum, dolo sit amet consectetur adipiscing elit.</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default About;
