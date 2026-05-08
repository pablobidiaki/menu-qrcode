import express from "express"

import * as productController from "../controllers/productController.js"

const router = express.Router()

router.post("/sandwich", productController.addSandwich)
router.post("/sidedish", productController.addSideDish)
router.post("/drink", productController.addDrink)
router.post("/dessert", productController.addDessert)

router.get("/sandwich", productController.getAllSandwiches)
router.get("/sidedish", productController.getAllSideDishes)
router.get("/drink", productController.getAllDrinks)
router.get("/dessert", productController.getAllDesserts)
router.get("/sandwich/:id", productController.getSandwichById)
router.get("/sidedish/:id", productController.getSideDishById)
router.get("/drink/:id", productController.getDrinkById)
router.get("/dessert/:id", productController.getDessertById)

router.delete("/sandwich", productController.deleteAllSandwiches)
router.delete("/sidedish", productController.deleteAllSideDishes)
router.delete("/drink", productController.deleteAllDrinks)
router.delete("/dessert", productController.deleteAllDesserts)
router.delete("/sandwich/:id", productController.deleteSandwichById)
router.delete("/sidedish/:id", productController.deleteSideDishById)
router.delete("/drink/:id", productController.deleteDrinkById)
router.delete("/dessert/:id", productController.deleteDessertById)

router.put("/sandwich/:id", productController.updateSandwichById)
router.put("/sidedish/:id", productController.updateSideDishById)
router.put("/drink/:id", productController.updateDrinkById)
router.put("/dessert/:id", productController.updateDessertById)

export default router