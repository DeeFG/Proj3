import React from "react";

function Footer() {
  return (
    
<div class="card text-center">
  <div class="card-header">
    Need Additional Information 
  </div>
  <div className="card-body">
    <h5 className="card-title">Blood Bank</h5>
    <p className="card-text">If Fast Blood has not anwered your question Please call us</p>
    <a className="btn btn-primary">617-555-9999</a> 
    <h5 className="card-title">Americn Red Cross</h5>
    <a href="https://www.redcrossblood.org/biomedical-services/blood-diagnostic-testing/antigen-negative-rbc-services.html" 
    className="btn btn-primary">Additional Antibody information </a>
  </div>
  <div class="card-footer text-muted">
    FAST BLOOD
  </div>
</div>
  );
}

export default Footer;
