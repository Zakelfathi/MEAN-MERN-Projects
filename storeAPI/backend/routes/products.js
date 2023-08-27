const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
  getProductById,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

// New route to get a product by ID
router.route("/:id").get(getProductById);

module.exports = router;
