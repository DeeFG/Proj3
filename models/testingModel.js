module.exports = function (sequelize, DataTypes){
    var TestingOrdered= sequelize.define("TestingOrdered",{
        TS: { 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 
        },
        ConfType:{ 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 
        },
        DAT: { 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 
        },
        Elution: { 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 
        },
        Titer: { 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 
        },
        FullXM: { 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 
        },
       
    });

    TestingOrdered.associate = function(models){
        TestingOrdered.belongsTo(models.PatientDemographics, {
            foreignKey: {
              allowNull: false
            }
          });
        };

    return TestingOrdered;
};

