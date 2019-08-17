module.exports = function (sequelize, DataTypes){
    var Antibody = sequelize.define("Antibody",{
    Antibody:DataTypes.STRING,
    Comment: DataTypes.STRING,
    });

    Antibody.associate = function(models){
        Antibody.belongsTo(models.PatientDemographics, {
            foreignKey: {
              allowNull: false
            }
          });
        };


    return Antibody;
};

