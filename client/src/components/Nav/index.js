import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <h5>NAV BAR</h5>
     <Link to="/patient/:id">Find Patient</Link> 
      <Link to="/patient/Testing"> Check Status </Link>
      {/* <Link to="/patient/Products">Where is my Blood?</Link> */}
       <Link to="/newPatient">Enter Patient</Link> 
      <Link to="/bloodbank">Blood Bank</Link>
    </nav>
  );
}

export default Nav;
