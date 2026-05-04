import express from "express"
import * as orderController from "../controllers/orderController.js";

const router = express.Router()

router.post("/", orderController.sendOrder)

router.get("/", orderController.getAllOrders)
router.get("/:id", orderController.getOrderById)

router.delete("/", orderController.deleteAllOrders)
router.delete("/:id", orderController.deleteOrderById)

router.put("/:id", orderController.updateOrderById)

export default router