import axios from "axios";

export default {
  createPatient: function(newPatient) {
    return axios.post("/api/newPatient", newPatient);
  },
  // GET ROUTES for patients and root
  getPatientById: function(id) {
    return axios.get("/api/patient/" + id);
  },
  getPatient: function() {
    return axios.get("/");
  },

  // GET ROUTES testing  and products for radial bars
  getTesting: function(id) {
    return axios.get("api/getTesting/" + id);
  },
  getProducts: function(id) {
    return axios.get("api/getProducts/" + id);
  },
  //POST ROUTES for testing, commentsm and products

  createTesting: function(id, updateTesting) {
    return axios.post("/api/" + id + "/updateTesting", updateTesting);
  },
  createAntibodyComment: function(id, updateAntibodyComment) {
    return axios.post(
      "/api/" + id + "/updateAntibodyComment",
      updateAntibodyComment
    );
  },
  createProducts: function(id, updateProducts) {
    return axios.post("/api/" + id + "/updateProducts", updateProducts);
  }
};
