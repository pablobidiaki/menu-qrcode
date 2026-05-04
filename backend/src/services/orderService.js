import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const sendNewOrder = async (data) => {
    if (!data.table) throw new Error(`Table number is required`);
    if (!data.items) throw new Error(`No items added to the order`);

    const order = await prisma.order.create({
        data:{
            items: data.items,
            table: data.table,
            status: data.status
        }
    })

    console.log(`Order sent to database!`)

    return order
}

export const getAllOrders = async () => {
    const orders = await prisma.order.findMany()

    console.log(`All orders viewed!`)

    return orders
}

export const getOrderById  = async (id) => {
    const order = await prisma.order.findUnique({
        where: {id: id},
    });

    if(!order) throw new Error(`Order by id ${id} not found`)

    console.log(`Order by id ${id} viewed!`)

    return order
}

export const deleteAllOrders = async () => {
    const orders = await prisma.order.deleteMany()

    console.log(`All orders deleted`)

    return orders
}

export const deleteOrderById = async (id) => {
    const order = await prisma.order.delete({
        where: {id: id}
    })

    console.log(`Order by id ${id} deleted!`)

    return order
}

export const updateOrderById = async (id, data) => {
    const order = await prisma.order.update({
        where: {id: id},
        data: {
            items: data.items,
            table: data.table,
            status: data.status
        }
    })

    console.log(`Order by id ${id} updated!`)

    return order
}