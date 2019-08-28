import axios from "axios";

export default {

  createPatient: function(){
    return axios.post("/api/newPatient");
  },
  getPatientById: function(id){
    return axios.get("/api/patient/" +id)
  },
  getPatient: function(){
    return axios.get("/");
  },
  createTesting: function(){
    return axios.post("/api/:id/updateTesting");
  },  
  createAntibodyComment: function(){
    return axios.post("/api/:id/updateAntibodyComment");
  },
  createProducts: function(){
    return axios.post("/api/:id/updateProducts");
  },
  
};
 