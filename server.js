const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Requiring our models for syncing
var db = require("./models");



// Define middleware here or  Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// ===============================================ç==============
require("./controller/routes.js")(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force:false}).then(function() {
  app.listen(PORT, function() {
    console.log("`🌎 ==> API server now on port" + PORT);
  });
});




// app.get('/callback',
//   passport.authenticate('auth0', { failureRedirect: '/login' }),
//   function(req, res) {
//     if (!req.user) {
//       throw new Error('user null');
//     }
//     res.redirect("/");
//   }
// );

// app.get('/login',
//   passport.authenticate('auth0', {}), function (req, res) {
//   res.redirect("/");
// });