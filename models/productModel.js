module.exports = function(sequelize, DataTypes) {
  var ProductsOrdered = sequelize.define("ProductsOrdered", {
    RedCell: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: 0 
    },
    Plasma: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: 0 
    },
    Plt:{ 
      type: DataTypes.BOOLEAN, 
      defaultValue: 0 
    },
    Cryo:{ 
      type: DataTypes.BOOLEAN, 
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
