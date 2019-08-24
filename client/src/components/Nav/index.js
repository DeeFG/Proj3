import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        NAVIGATION BAR
      </a>
      <a className="nav-item nav-link active" href="/">
        Enter Patient 
      </a>

      <a className="nav-item nav-link active" href="/">
       Type or 2ndType?
      </a>
      <a className="nav-item nav-link active" href="/">
        Where is my Boood
      </a>
      <a className="nav-item nav-link active" href="/">
        Another patient?
      </a>
    </nav>
  );
}

export default Nav;
