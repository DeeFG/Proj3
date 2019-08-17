// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
  //==========================================={CLIENT SIDE OPTIONS}=============================
  //==========================================={creates a new patient}=============================
  app.post("/api/newPatient", function(req, res) {
    console.log(req.body);

    db.PatientDemographics.create({
      FirstName: req.body.FirstName,
      LastName:req.body.LastName ,
      birth:req.body.birth,
      Gender:req.body.Gender
    })
      .then(function(result) {
        res.json(result);
      })
      // .catch(function(err) {
      //   res.sendStatus(500).end(err);
      // });
      // return result;
  });
//===================================={find all patients}=============================
  
  app.get("/", function(req, res) {
    db.PatientDemographics.findAll({}).then(function(results) {
      console.log(results);
      res.json({"patients":results});
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
      res.json({"patient":results});
      });
    } else {
   
      alert ("patient not found");
    }
    console.log(req.params.id);
  });


  
//******************************{BLOOD BANK SIDE OPTIONS}*****************************
//******************************{update the testing}*****************************



app.put("/api/:id/updateTesting", function(req, res) {
  ///cross join
  // https://stackoverflow.com/questions/20460270/how-to-make-join-queries-using-sequelize-on-node-js
  db.TestingOrdered.post(
    {
      TS:req.body.TS ,
      ConfType:req.body.ConfType ,
      DAT:req.body.DAT,
      Elution:req.body.Elution ,
      Titer:req.body.Titer ,
      FullXM:req.body.FullXM ,
    }
    // {
    //   where: {
    //     id:req.params.id
    //   }
    // }
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
  


//******************************{update comment}*****************************



//******************************{update timer}*****************************



//******************************{Update Antibodies and comment}*****************************

  app.put("/api/updateAntibodies", function(req, res) {
    db.PatientData.update(
      {
      Antibody: req.body.antibody,
      Comment: req.body.Comment,
   
      },
      {
        where: {
          id:req.params.id
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

  
};


// do the get 
// when done modifying 
// fill form 
// sumbmit - put