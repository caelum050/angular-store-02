module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      price: {
          type: Sequelize.DECIMAL(10,2)
      },
      image: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };