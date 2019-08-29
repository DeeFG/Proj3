import axios from "axios";

export default {

  createPatient: function(newPatient){
    return axios.post("/api/newPatient", newPatient);
  },
  getPatientById: function(id){ 
    return axios.get("/api/patient/" +id)
  },
  getPatient: function(){
    return axios.get("/");
  },
  createTesting: function(updateTesting){
    return axios.post("/api/:id/updateTesting", updateTesting);
  },  
  createAntibodyComment: function(updateAntibodyComment){
    return axios.post("/api/:id/updateAntibodyComment", updateAntibodyComment);
  },
  createProducts: function(updateProducts){
    return axios.post("/api/:id/updateProducts",updateProducts);
  },
  
};
  