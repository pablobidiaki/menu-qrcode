import express from "express"

import { error, log } from "node:console"

import orderRoutes from "./routes/orderRoutes.js"

const app = express()

app.use(express.json())

// Run Server
app.listen(3000, () => {
    console.log("O servidor esta rodando")
})

// Orders routes
app.use('/orders', orderRoutes)

// // Add a sandwich in database
// app.post("/sandwiches", async (req, res) => {
//     try{
//         const newSandwich = await prisma.sandwich.create({
//             data:{
//                 name: req.body.name,
//                 description: req.body.description,
//                 price: req.body.price,
//                 promotionPrice: req.body.promotionPrice,
//                 ingredients: req.body.ingredients,
//                 images: req.body.images,
//                 type: req.body.type,
//             }
//         })
//         res.status(201).json(newSandwich)
//     }catch(err){
//         console.log(err)

//         res.status(500).json({error: "Internal server error"})
//     }
// })