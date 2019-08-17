module.exports = function (sequelize, DataTypes){
    var TestingOrdered= sequelize.define("TestingOrdered",{
        TS: DataTypes.BOOLEAN,
        ConfType: DataTypes.BOOLEAN,
        DAT: DataTypes.BOOLEAN,
        Elution: DataTypes.BOOLEAN,
        Titer: DataTypes.BOOLEAN,
        FullXM: DataTypes.BOOLEAN,
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