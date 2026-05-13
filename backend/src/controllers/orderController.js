import * as orderService from "../services/orderService.js"

export const sendOrder = async (req, res) => {
    try{
        const dataOrder = req.body
        const newOrder = await orderService.sendNewOrder(dataOrder)

        res.status(201).json({
            message: `Order sent to success`,
            order: newOrder,
        })
    }
    catch(error){
        console.error(`Error while trying to run sendOrder: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getAllOrders = async (req, res) => {
    try{
        const getAllOrders = await orderService.getAllOrders()

        res.status(200).json({
            message: `All orders viewed`,
            orders: getAllOrders
        })
    }
    catch(error){
        console.log(`Error while trying to run getAllOrders: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getOrderById  = async (req, res) => {
    try{
        const idOrder = req.params.id
        const getOrderById = await orderService.getOrderById (idOrder)

        res.status(200).json({
            message: `Order by id ${idOrder}viewed`,
            order: getOrderById
        })
    }
    catch(error){
        console.log(`Error while trying to run getOrderById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteAllOrders = async (req, res) => {
    try{
        const orders = await orderService.deleteAllOrders()

        res.status(200).json({
            message: `All orders deleted!`,
            orders: orders
        })
    }
    catch(error){
        console.log(`Error while trying to run deleteAllOrders: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteOrderById = async (req, res) => {
    try{
        const idOrder = req.params.id

        const order = await orderService.deleteOrderById(idOrder)

        res.status(200).json({
            message: `Order by id ${idOrder} deleted`,
            order: order
        })
    }
    catch(error){
        console.log(`Error while trying to run deleteOrderById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const updateOrderById = async (req, res) => {
    try{
        const idOrder = req.params.id
        const dataOrder = req.body

        const order = await orderService.updateOrderById(idOrder, dataOrder)

        res.status(200).json({
            message: `Order by id ${idOrder} deleted`,
            order: order
        })
    }
    catch(error){
        console.log(`Error while trying to run updateOrderById: ${error}`)
        res.status(400).json({error: error.message})
    }
}