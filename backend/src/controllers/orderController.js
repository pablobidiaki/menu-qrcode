import * as orderService from "../services/orderService.js"

export const sendOrder = async (req, res) => {
    try{
        const data_order = req.body
        const newOrder = await orderService.sendNewOrder(data_order)

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
        const id_order = req.params.id
        const getOrderById = await orderService.getOrderById (id_order)

        res.status(200).json({
            message: `Order by id ${id_order}viewed`,
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
        const id_order = req.params.id

        const order = await orderService.deleteOrderById(id_order)

        res.status(200).json({
            message: `Order by id ${id_order} deleted`,
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
        const id_order = req.params.id
        const data_order = req.body

        const order = await orderService.updateOrderById(id_order, data_order)

        res.status(200).json({
            message: `Order by id ${id_order} deleted`,
            order: order
        })
    }
    catch(error){
        console.log(`Error while trying to run updateOrderById: ${error}`)
        res.status(400).json({error: error.message})
    }
}