import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const addProduct = async (data) => {
    const product = await prisma.products.create({
        data:{
            name: data.name,
            description: data.description,
            price: data.price,
            promotionPrice: data.promotionPrice,
            ingredients: data.ingredients,
            images: data.images,
            type: data.type,
            isActive: data.isActive
        }
    })

    console.log(`Product added to database!`)

    return product
}

export const getAllProducts = async () => {
    const products = await prisma.products.findMany()

    console.log(`All Products viewed!`)

    return products
}

export const getProductById = async (id) => {
    try{
        const product = await prisma.products.findUnique({
            where:{id: id}
        })

        console.log(`Product by id ${id} viewed!`)

        return product
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Product by id ${id} not found`)
        throw new Error(`Internal server error during deletion`)
    }    
}

export const deleteAllProducts = async () => {
    const products = await prisma.products.deleteMany()

    console.log(`All Products deleted`)

    return products
}

export const deleteProductById = async (id) => {
    try{
        const product = await prisma.products.delete({
            where: { id: id }
        })

        console.log(`Product by id ${id} deleted!`)

        return product
    }
    catch(error){
        if (error.code === 'P2025') throw new Error(`Product by id ${id} not found`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const updateProductById = async (id, data) => {
    try{
        const product = await prisma.products.update({
            where: {id: id},
            data:{
                name: data.name,
                description: data.description,
                price: data.price,
                promotionPrice: data.promotionPrice,
                ingredients: data.ingredients,
                images: data.images,
                type: data.type,
                isActive: data.isActive
            }
        })
        
        console.log(`Product by id ${id} edited!`)

        return product
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Product by id ${id} not found`)
        throw new Error(`Internal server error during deletion`)
    }
}