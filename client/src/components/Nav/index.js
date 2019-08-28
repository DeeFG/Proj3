import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <h5>NAV BAR</h5>
      <Link to="/newPatient">Enter Patient</Link> 
      <Link to="/patient#testing"> Testing?  </Link>
      <Link to="/patient#products">Where is my Blood?</Link>
      <Link to="/">Another patient?</Link>
    </nav>
  );
}

export default Nav;
