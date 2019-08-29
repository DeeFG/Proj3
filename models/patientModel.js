module.exports = function(sequelize, DataTypes) {
  var PatientDemographics = sequelize.define("PatientDemographics", {
    FirstName: {
      type: DataTypes.STRING,
      defaultValue: "Firstname",
      validate: {
        len: [1]
      }
    },
    LastName: {
      type: DataTypes.STRING,
      defaultValue: "lastname",
      logging: false,
      validate: {
        len: [1]
      }
    },
    birth: {
      type: DataTypes.DATE,
      logging: false,
      isDate: true
    },
    Gender: {
      type: DataTypes.STRING,
      defaultValue: "U",
      logging: false,
      validate: {
        len: [1]
      }
    }
  });
  return PatientDemographics;
};
