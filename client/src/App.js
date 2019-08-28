import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Staff from "./pages/Staff";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import BloodBank from "./pages/BloodBank";
import SearchPatient from "./pages/SearchPatient";
import NewPatient from "./pages/NewPatient"
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchPatient} />
          <Route exact path="/newPatient" component ={NewPatient} />          
          <Route exact path="/patient" component={Staff} />
          <Route exact path="/patient/:id" component={SearchPatient} />
          <Route exact path="/updateTesting" component={BloodBank} />
          <Route exact path="/updateAntibodyComment" component={BloodBank} />
          <Route exact path="/updateProducts" component={BloodBank} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
