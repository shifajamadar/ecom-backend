const express = require("express");
const {
  getAllProducts,
  getproductById,
  createproduct,
  updateproduct,
  deleteproduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getproductById);

productRoutes.post("/products", createproduct);

productRoutes.put("/products/:id", updateproduct);

productRoutes.delete("/products/:id", deleteproduct);

module.exports = productRoutes;
