import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info text-danger">

   <h3>
     <Link to="/patient/:id">Check status</Link> <span></span><span></span>
      <Link to="/newPatient">Enter Patient</Link> <span></span><span></span>
      <Link to="/">Blood Bank</Link> <span></span><span></span>
   </h3>

     
    </nav>
   

  );
}

export default Nav;
