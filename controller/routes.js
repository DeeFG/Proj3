// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
  //==========================================={CLIENT SIDE OPTIONS}=============================
  //==========================================={get to_order list}=============================
  app.get("/orderList", async (req, res) => {
    const testResp = await db.TestingOrdered.find()
  })
  //==========================================={creates a new patient}=============================
  app.post("/api/newPatient", function(req, res) {
    console.log("api server" + req.body);

    db.PatientDemographics.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      birth: req.body.birth,
      Gender: req.body.Gender
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });
  //===================================={find all patients}=============================

  app.get("/", function(req, res) {
    db.PatientDemographics.findAll({}).then(function(results) {
      console.log(results);
      res.json({ patients: results });
    });
  });

  //==============================={find One patient by ID }===========================
  app.get("/api/patient/:id", function(req, res) {
    if (req.params.id) {
      db.PatientDemographics.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        console.log(results);
        res.json({ patient: results });
      });
    } else {
      alert("patient not found");
    }
    console.log(req.params.id);
  });


  app.get("/api/getTesting/:id", function(req, res) {
    if (req.params.id) {
      db.TestingOrdered.findOne({
        where: {
          PatientDemographicId: req.params.id
        },
      }).then(function(results) {
        console.log(results);
        res.json({ patient: results });
      });
    } else {
      alert("patient not found");
    }
    console.log(req.params.id);
  });

  app.get("/api/getProducts/:id", function(req, res) {
    if (req.params.id) {
      db.ProductsOrdered.findOne({
        where: {
          PatientDemographicId: req.params.id
        },
      }).then(function(results) {
        console.log(results);
        res.json({ patient: results });
      });
    } else {
      alert("patient not found");
    }
    console.log(req.params.id);
  });

  //******************************{BLOOD BANK SIDE OPTIONS}*****************************
  //******************************{update the testing}*****************************

  app.post("/api/:id/updateTesting", function(req, res) {
    db.TestingOrdered.create(
      {
        PatientDemographicId: req.params.id,
        TS: req.body.TS,
        ConfType: req.body.ConfType,
        DAT: req.body.DAT,
        Elution: req.body.Elution,
        Titer: req.body.Titer,
        FullXM: req.body.FullXM
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(updatedPatientData) {
        res.json(updatedPatientData);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  //******************************{update timer}*****************************

  //******************************{Update Antibodies and comment}*****************************

  app.post("/api/:id/updateAntibodyComment", function(req, res) {
    db.Antibody.create(
      {
        PatientDemographicId: req.params.id,
        Antibody: req.body.Antibody,
        Comment: req.body.Comment
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbpatientData) {
        res.json(dbpatientData);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
  //******************************{Update  products}*****************************
  app.post("/api/:id/updateProducts", function(req, res) {
    db.ProductsOrdered.create({
      PatientDemographicId: req.params.id,
      RedCell: req.body.RedCell,
      Plasma: req.body.Plasma,
      Plt: req.body.Plt,
      Cryo: req.body.Cryo
    })
      .then(async function(updatedPatientData) {
        console.log(updatedPatientData);

        res.json(updatedPatientData);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};

// do the get
// when done modifying
// fill form
// sumbmit - put
