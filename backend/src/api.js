import express from 'express'
import cors from 'cors'

import { error, log } from "node:console"

import orderRoutes from "./routes/orderRoutes.js"
import productRoutes from "./routes/productRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

// Run Server
app.listen(3000, () => {
    console.log("O servidor esta rodando")
})

// Orders routes
app.use('/orders', orderRoutes)

// Product routes, can add sandwich, side dish, drink and dessert
app.use('/product', productRoutes)