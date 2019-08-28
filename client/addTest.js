// search data base for id

// if antibodies present add time to progress bar
//if not present stay the same
// save progress bar in database?
// look up patient again..progress should stay the same
// update again ...progess stay the same





function savePatient() {
  FirstName = $("#first-input").val().trim();
  LastName = $("#last-input").val().trim();
  birth = $("#birth-input").val();
  Gender = $("#gender-input").val();
  
  return $.post("/api/newPatient", {
    // stores input information in database
    FirstName: FirstName,
    LastName: LastName,
    birth: birth,
    Gender: Gender

  }).then(function(result) {
    clearInputForm();

//change timer count to 40mins

    if (testing === testing.checked){
      var chart = new ApexCharts(el, options);
      chart.updateSeries([{
        data: [32, 44, 31, 41, 22]
      }])
    }//every 5 minw update wserie by 10

    console.log(saved);



    //   appends static data for new patient to page

    // $("#staticData").append(
    //   "<h2>You have created a new patient</h2>" +
    //   "<br> <h2>Hospital ID: </h2>"  + "<h1><strong>" +result.id + "<strong></h1>" +
    //   "First Name: " +
    //     result.FirstName +
    //     "<br><h2>Last Name:</h2> " +
    //     result.LastName +
    //     "<br> DOB: </h2> " +
    //     result.birth +
    //     "<br><h2> Gender:  </h2>" + 
    //     result.Gender
    // );
  });
}



// $("#submitAntibodies").click(function() {
//   savePatient();
//     console.log(" save pt ran");
//   });
//   $("#updatePatient").on("click", function(){
//     console.log("Here")
// })


// function getTestingChoice() {
//   var testingChoice = 
//   // {
//     // TS: 
//     document.getElementById("TS").checked;
//     // secondType: document.getElementById("secondType").checked,
//     // spTest: document.getElementById("spTest").checked
//   // };
//   return testingChoice;
// }



// function getAntibodies() {
//   var selectedAntibodies = [];
//   $.each($(".antibodies option:selected"), function() {
//     selectedAntibodies.push($(this).val());
//   });
//   return selectedAntibodies.join(", ");
//   // console.log("Patient has Antibodies " + selectedAntibodies.join(", "));
// }



// // -----------------------seaerch for patient on client side-------------------------------


// $("#submitPatient").on("click", function() {

//   this.disabled = true;

//   var id = $("#id-input").val();
//   console.log(id);

//   $.get("/patientData/" + id).then(function(data) {
//     console.log(data);
//     if (data.Antibodies) {
      
//       var currentTime = new Date();
//       currentTime.setMinutes(currentTime.getMinutes() + 60);
//       console.log(currentTime.toUTCString());
//       var newTime = currentTime.toUTCString();


      
//       $("#staticData").append(
//         "First Name: " +
//           data.FirstName +
//           "<br>Last Name: " +
//           data.LastName +
//           "<br> DOB: " +
//           data.birth +
//           "<br> Antibodies Present: " +
//           data.Antibodies +
//           "<br><strong>Products should be fullfilled by:</strong> " + "<h3>" + newTime +"</h3><br><br>" 
//       );

//    console.log("Has Antibodies");

//     //   $(".progress-bar")
//     //     .css("width", "20%")
//     //     .attr("aria-valuenow", 0);
//     //   $(".progress-bar2")
//     //     .css("width", "30%")
//     //     .attr("aria-valuenow", 0);


        


//     } else {
//       console.log("No Anitbodies");
    
//       $("#staticData").append(
//         "First Name: " +
//           data.FirstName +
//           "<br>Last Name: " +
//           data.LastName +
//           "<br> DOB: " +
//           data.birth +
//           "<br> Gender" +
//           data.Gender +
         
//       );



//     }
//   });
// });



// $("#searchNewPatient").click(function(){
//   location.reload(true);
// });


// // clears form
// function clearInputForm() {
//   $('input[type="text"], textarea').val("");
//   $("input[type=date]").each(function resetDate() {
//     this.value = this.defaultValue;
//   });
//   // $("input").prop('disabled', true);
//   $(".inputBox").hide();
// }



// //  var testingChoice = getTestingChoice();
// //   console.log("Getting Testing Choice");

// //   var productQuantity = $("#productQuantity").val();
  
// //   console.log("Product Quantity");
 
// //   console.log("Getting Product");
// //   var productSelection = $("#product").val();

// //   // var gender = getGender();

// //   console.log("Getting Antibodies");
// //   var selectedAntibodies = getAntibodies();
