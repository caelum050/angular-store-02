module.exports = app => {
    const products = require("../controllers/product.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", products.create);
  
    // Retrieve all Tutorials
    router.get("/", products.findAll);
  
  
    app.use('/api/products', router);
};