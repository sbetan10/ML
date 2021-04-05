var express = require('express');
var router = express.Router();
const ProductsService = require("../../service/ProductsService");
const { getCategories, getItems, getItem, getDescriptionProduct, getCategoriesById } = require("../../utils/ProductUtils");

const productService = new ProductsService();

// Retorna una lista de produtos según el query utilizado
router.get('/', async function (req, res, next) {
  // Se obtiene el QueryParams para hacer la consulta a la API
  const { q: query } = req.query;
  try {
    const data = await productService.getProductsByQuery(query);
    // Se procesan el objeto que responde la API, para obtener la categoria y la lista de productos
    const categories = getCategories(data)
    const items = getItems(data)
    res.status(200).json({ categories, items });
  } catch (err) {
    res.status(500).json({ data: err.message, message: "Error" });
  }
});

// Retorna un producto por su id
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const data = await productService.getProductById(id)
    const item = getItem(data)
    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json({ data: err.message, message: "Error" });
  }
});

// Retorna una cateogria por su id
router.get("/categories/:idCategoria", async function (req, res, next) {
  const { idCategoria } = req.params;
  try {
    const data = await productService.getCategoriesById(idCategoria)
    const categories = getCategoriesById(data)
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).json({ data: err.message, message: "Error" });
  }
});

/* Find a products by idProduct and return them description */
// Retorna la descripción de un producto por el id del producto
router.get("/:id/description", async function (req, res, next) {
  const { id } = req.params;
  try {
    const data = await productService.getDescriptionProductById(id)
    const description = getDescriptionProduct(data)
    res.status(200).json({ description });
  } catch (err) {
    res.status(500).json({ data: err.message, message: "Error" });
  }
});

module.exports = router;
