module.exports = function (sequelize, DataTypes){
    const TestingOrdered= sequelize.define("TestingOrdered",{
        TS: { 
          type: DataTypes.BOOLEAN, 
          defaultValue: 0 ,
          logging:false,
        },
        ConfType:{ 
          type: DataTypes.BOOLEAN, 
          logging:false,
          defaultValue: 0 
        },
        DAT: { 
          type: DataTypes.BOOLEAN, 
          logging:false,
          defaultValue: 0 
        },
        ABID:{ 
          type: DataTypes.BOOLEAN, 
          logging:false,
          defaultValue: 0 
        },
        Elution: { 
          type: DataTypes.BOOLEAN, 
          logging:false,
          defaultValue: 0 
        },
        Titer: { 
          type: DataTypes.BOOLEAN, 
          logging:false,
          defaultValue: 0 
        },
        FullXM: { 
          type: DataTypes.BOOLEAN, 
          logging:false,
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

