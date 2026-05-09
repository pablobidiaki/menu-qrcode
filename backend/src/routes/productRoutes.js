import express from "express"

import * as productController from "../controllers/productController.js"

const router = express.Router()

router.post("/", productController.addProduct)

router.get("/", productController.getAllProducts)
router.get("/:id", productController.getProductById)

router.delete("/", productController.deleteAllProducts)
router.delete("/:id", productController.deleteProductById)

router.put("/:id", productController.updateProductById)

export default router