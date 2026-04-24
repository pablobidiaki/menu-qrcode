import express from "express"
import { PrismaClient } from "@prisma/client"
import { log } from "node:console"

const app = express()
app.use(express.json())

const prisma = new PrismaClient()

app.listen(3000, () => {
    console.log("O servidor esta rodando")
})

// Send order to kitchen
app.post('/orders', async (req, res) => {
    await prisma.pedido.create({
        data:{
            pedido: req.body.pedido,
            mesa: req.body.mesa
        }
    })
    console.log("Pedido enviado para cozinha!")
})

// View all orders
app.get("/orders", async (req, res) => {
    const pedidos  = await prisma.pedido.findMany()

    console.log(pedidos)
})

// Update an order by id informed
app.put("/orders/:id", async (req, res) => {
    await prisma.pedido.update({
        where: {
            id: req.params.id
        },
        data: {
            pedido: req.body.pedido,
            mesa: req.body.mesa
        }
    })
    console.log(`Pedido com o id ${req.params.id} atualizado!`)
})

// Delete an order by id informed
app.delete("/orders/:id", async (req, res) => {
    await prisma.pedido.delete({
        where:{
            id: req.params.id
        }
    })

    console.log(`Pedido com id : ${req.params.id} deletado!`)
})

// Delete all orders
app.delete("/orders", async (req, res) => {
    await prisma.pedido.deleteMany()
})

// Add a sandwich in database
app.post("/sandwiches", async (req, res) => {
    try{
        const newSandwich = await prisma.sandwich.create({
            data:{
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                promotionPrice: req.body.promotionPrice,
                ingredients: req.body.ingredients,
                images: req.body.images,
                type: req.body.type,
            }
        })
        res.status(201).json(newSandwich)
    }catch(err){
        console.log(err)

        res.status(500).json({error: "Internal server error"})
    }
})