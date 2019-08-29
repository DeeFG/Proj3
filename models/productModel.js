module.exports = function(sequelize, DataTypes) {
  var ProductsOrdered = sequelize.define("ProductsOrdered", {
    RedCell: { 
      type: DataTypes.INTEGER, 
      defaultValue: 0 
    },
    Plasma: { 
      type: DataTypes.INTEGER, 
      defaultValue: 0 
    },
    Plt:{ 
      type: DataTypes.INTEGER, 
      defaultValue: 0 
    },
    Cryo:{ 
      type: DataTypes.INTEGER, 
      defaultValue: 0 
    }
  });

  ProductsOrdered.associate = function(models) {
    ProductsOrdered.belongsTo(models.PatientDemographics, {
      foreignKey: {
        allowNull: false
      } 
    });
  };
  return ProductsOrdered;
};
