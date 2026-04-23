import express from "express"
import { PrismaClient } from "@prisma/client"
import { log } from "node:console"

const app = express()
app.use(express.json())
const prisma = new PrismaClient()

app.listen(3000)

app.listen(3000, () => {
    console.log("O servidor esta rodando")
})

app.post('/pedido', async (req, res) => {
    await prisma.pedido.create({
        data:{
            pedido: req.body.pedido,
            mesa: req.body.mesa
        }
    })
})

app.get("/pedidos", async (req, res) => {
    const pedidos  = await prisma.pedido.findMany()
    console.log(pedidos)
})

app.get("/pedido/:id", async (req, res) => {
    await prisma.pedido.update({
        where: {
            id: req.params.id
        },
        data: {
            pedido: req.body.pedido,
            mesa: req.body.mesa
        }
    })
})

app.delete("/pedido/:id", async (req, res) => {
    await prisma.pedido.delete({
        where:{
            id: req.params.id
        }
    })
})

app.delete("/pedido", async (req, res) => {
    await prisma.pedido.deleteMany()
})