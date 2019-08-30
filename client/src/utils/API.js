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

  getLists: function(){
    return axios.get("/orderList")
  },
  createTesting: function(id, updateTesting){
    return axios.post("/api/" + id+ "/updateTesting", updateTesting);
  },  
  createAntibodyComment: function(id, updateAntibodyComment){
    return axios.post("/api/"+id+"/updateAntibodyComment", updateAntibodyComment);
  },
  createProducts: function(id, updateProducts){
    return axios.post("/api/"+id+"/updateProducts",updateProducts);
  },
  
};
  