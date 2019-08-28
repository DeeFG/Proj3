module.exports = function(sequelize, DataTypes) {
    var PatientDemographics = sequelize.define("PatientDemographics", {
      FirstName: {
        type: DataTypes.STRING,
        defaultValue : "Jane",
        nullable: true ,
        validate: {
          len: [1]
        }
      },
      LastName: {
        type: DataTypes.STRING,
        defaultValue :"Doe",
        nullable: true ,
        validate: {
          len: [1]
        }
      },
      birth:{
        type: DataTypes.INTEGER,
        defaultValue : 01/01/1900,
        nullable: true ,
        validate: {
          len: [1]
        }
      },
      Gender:{
        type: DataTypes.STRING,
        defaultValue:"U",
        nullable: true ,
        validate: {
          len: [1]
        }
      },
    });
    return PatientDemographics;
  };
  

