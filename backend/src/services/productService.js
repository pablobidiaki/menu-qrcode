import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Actions by Sandwich
export const addSandwich = async (data) => {
    const sandwich = await prisma.sandwich.create({
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

    console.log(`Sandwich added to database!`)

    return sandwich
}

export const getAllSandwiches = async () => {
    const sandwiches = await prisma.sandwich.findMany()

    console.log(`All sandwiches viewed!`)

    return sandwiches
}

export const getSandwichById = async (id) => {
    try{
        const sandwich = await prisma.sandwich.findUnique({
            where:{id: id}
        })

        console.log(`Sandwich by id ${id} viewed!`)

        return sandwich
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Sandwich by id ${id} not found`)
        throw new Error(`Internal server error during deletion`)
    }    
}

export const deleteAllSandwiches = async () => {
    const sandwiches = await prisma.sandwich.deleteMany()

    console.log(`All sandwiches deleted`)

    return sandwiches
}

export const deleteSandwichById = async (id) => {
    try{
        const sandwich = await prisma.sandwich.delete({
            where: { id: id }
        })

        console.log(`Sandwich by id ${id} deleted!`)

        return sandwich
    }
    catch(error){
        if (error.code === 'P2025') throw new Error(`Sandwich by id ${id} not found`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const updateSandwichById = async (id, data) => {
    try{
        const sandwich = await prisma.sandwich.update({
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
        
        console.log(`Sandwich by id ${id} edited!`)

        return sandwich
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Sandwich by id ${id} not found`)
        throw new Error(`Internal server error during deletion`)
    }
}

// Actions by Side dish
export const addSideDish  = async (data) => {
    const sideDish = await prisma.sideDishes.create({
        data:{
            name: data.name,
            description: data.description ,
            size: data.size,
            price: data.price,
            promotionPrice: data.promotionPrice ,
            images: data.images,
            type: data.type,
            isActive: data.isActive
        }
    })

    console.log(`Side dish added to database!`)

    return sideDish
}

export const getAllSideDishes = async () => {
    const sideDishes = await prisma.sideDishes.findMany()

    console.log(`All side dishes viewed!`)

    return sideDishes
}

export const getSideDishById = async (id) => {
    try{
        const sideDish = await prisma.sideDishes.findUnique({
            where: {id: id}
        })

        console.log(`Side dish by id ${id} viewed!`)

        return sideDish
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Side dish by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const deleteAllSideDishes = async () => {
    const sideDishes = await prisma.sideDishes.deleteMany()

    console.log(`All side dishes deleted`)

    return sideDishes
}

export const deleteSideDishById = async (id) => {
    try{
        const sideDish = await prisma.sideDishes.delete({
            where: {id: id}
        })

        console.log(`Side dish by id ${id} deleted!`)

        return sideDish
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Side dish by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const updateSideDishById = async (id, data) => {
    try{
        const sideDish = await prisma.sideDishes.update({
            where: {id: id},
            data: {
                name: data.name,
                description: data.description ,
                size: data.size,
                price: data.price,
                promotionPrice: data.promotionPrice ,
                images: data.images,
                type: data.type,
                isActive: data.isActive
            }
        })

        console.log(`Side dish by id ${id} edited!`)

        return sideDish
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Side dish by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

// Actions by Drink
export const addDrink = async (data) => {
    const drink = await prisma.drinks.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            promotionPrice: data.promotionPrice,
            images: data.images,
            isAlcoholic: data.isAlcoholic,
            isActive: data.isActive
        }
    })

    console.log(`Drink added to database!`)

    return drink
}

export const getAllDrinks = async () => {
    const drinks = await prisma.drinks.findMany()

    console.log(`All drinks viewed!`)

    return drinks
}

export const getDrinkById = async (id) => {
    try{
        const drink = await prisma.drinks.findUnique({
            where: {id: id}
        })

        console.log(`Drink by id ${id} viewed!`)

        return drink
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Drink by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const deleteAllDrinks = async () => {
    const drinks = await prisma.drinks.deleteMany()

    console.log(`All drinks deleted`)

    return drinks
}

export const deleteDrinkById = async (id) => {
    try{
        const drink = await prisma.drinks.delete({
            where: {id: id}
        })

        console.log(`Drink by id ${id} deleted!`)

        return drink
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Drink by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const updateDrinkById = async (id, data) => {
    try{
        const drink = await prisma.drinks.update({
            where: {id: id},
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                promotionPrice: data.promotionPrice,
                images: data.images,
                isAlcoholic: data.isAlcoholic,
                isActive: data.isActive
            }
        })

        console.log(`Drink by id ${id} edited!`)

        return drink
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Drink by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

// Actions by Dessert
export const addDessert = async (data) => {
    const dessert = await prisma.dessert.create({
        data: { 
            name: data.name,
            description: data.description,
            price: data.price,
            promotionPrice: data.promotionPrice,
            images: data.images,
            isActive: data.isActive
        }
    })

    console.log(`Dessert added to database!`)

    return dessert
}

export const getAllDesserts = async () => {
    const desserts = await prisma.dessert.findMany()

    console.log(`All desserts viewed!`)

    return desserts
}

export const getDessertById = async (id) => {
    try{
        const dessert = await prisma.dessert.findUnique({
            where: {id: id}
        })

        console.log(`Dessert by id ${id} viewed!`)

        return dessert
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Dessert by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const deleteAllDesserts = async () => {
    const desserts = await prisma.dessert.deleteMany()

    console.log(`All desserts deleted`)

    return desserts
}

export const deleteDessertById = async (id) => {
    try{
        const dessert = await prisma.dessert.delete({
            where: {id: id}
        })

        console.log(`Dessert by id ${id} deleted!`)

        return dessert
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Dessert by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}

export const updateDessertById = async (id, data) => {
    try{
        const dessert = await prisma.dessert.update({
            where: {id: id},
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                promotionPrice: data.promotionPrice,
                images: data.images,
                isActive: data.isActive
            }
        })

        console.log(`Dessert by id ${id} edited!`)

        return dessert
    }
    catch(error){
        if(error.code === 'P2025') throw new Error(`Dessert by id ${id} not found!`)
        throw new Error(`Internal server error during deletion`)
    }
}