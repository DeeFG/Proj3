module.exports = function (sequelize, DataTypes){
    var ProductsOrdered = sequelize.define("ProductsOrdered",{
        RedCell: DataTypes.INTEGER,
        Plasma: DataTypes.INTEGER,
        Plt: DataTypes.INTEGER,
        Cryo: DataTypes.INTEGER,
        
    });

    ProductsOrdered.associate = function(models){
        ProductsOrdered.belongsTo(models.PatientDemographics, {
            foreignKey: {
              allowNull: false
            }
          });
        };
    return ProductsOrdered;
};