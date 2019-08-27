$("#submitPatient").on("click", function() {
    var id = $("#id-input").val();
    console.log(id);
    
    $.get(("/api/patient/:id").then(function(data) {
      console.log(data);

      $("#staticData").append(
        "First Name: " +
          data.FirstName +
          "<br>Last Name: " +
          data.LastName +
          "<br> DOB: " +
          data.birth +
          "<br> Antibodies: " +
          data.Gender +
      );
      
      if (data.Antibody) {
        console.log("Has Antibodies and may take up to 1 hour ");
     //split the string
    //loop through antibodies
     //if length is ____ then add ___ to series progress
   // update progress bar 
      } else {
        console.log("No Anitbodies");
        
       //split the string
    //loop through antibodies
     //if length is ____ then add ___ to series progress
   // update progress bar 


      }
    });
  });



// $("#submit1").on("click", function (event) {
//     event.preventDefault();

//     id = $("#id-input").val().trim();
//     console.log("extracted id");
//     $.put("/api/findPatient", {
//         // stores input information in database
//         id: id,
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//         birth: req.body.birth,

//     }).then(function (result) {
//         console.log(result);
//         clearInputForm();
//         //   appends static data for new oatient to page

//         $("#staticData").append("First Name: " + result.FirstName + "<br>Last Name: " + result.LastName + "<br> DOB: " + result.birth);
//         $("#staticData").show();
//     })
// });
  

// function clearInputForm() {
//     $('input[type="text"], textarea').val('');
//     $('input[type=date]').each( function resetDate(){
//         this.value = this.defaultValue;
//       } );
//     // $("input").prop('disabled', true);
//     $(".inputBox").hide();
// }
