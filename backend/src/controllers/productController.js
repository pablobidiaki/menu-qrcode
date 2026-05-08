import express from "express"

import * as productService from "../services/productService.js"

// Actions by sandwich
export const addSandwich = async (req, res) => {
    try{
        const dataSandwich = req.body
    
        const sandwich = await productService.addSandwich(dataSandwich)
        res.status(201).json({
            message: `Sandwich added successfully`,
            sandwich: sandwich
        })
    }
    catch(error){
        console.error(`Error while trying to run addSandwich: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getAllSandwiches = async (req,res) => {
    try{
        const sandwiches = await productService.getAllSandwiches()
        res.status(200).json({
            message: `Sandwiches viewed successfully`,
            sandwiches: sandwiches
        })
    }
    catch(error){
        console.error(`Error while trying to run getAllSandwiches: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getSandwichById = async (req, res) => {
    try{
        const idSandwich = req.params.id

        const sandwich = await productService.getSandwichById(idSandwich)
        res.status(200).json({
            message: `Sandwich viewed successfully`,
            sandwich: sandwich
        })
    }
    catch(error){
        console.error(`Error while trying to run getSandwichById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteAllSandwiches = async (req, res) => {
    try{
        const sandwiches = await productService.deleteAllSandwiches()
        res.status(200).json({
            message: `All Sandwiches deleted successfully`,
            sandwiches: sandwiches
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteAllSandwiches: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteSandwichById = async (req, res) => {
    try{
        const idSandwich = req.params.id

        const sandwich = await productService.deleteSandwichById(idSandwich)
        res.status(200).json({
            message: `Sandwich deleted successfully`,
            sandwich: sandwich
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteSandwichById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const updateSandwichById = async (req, res) => {
    try{
        const idSandwich = req.params.id
        const dataSandwich = req.body

        const sandwich = await productService.updateSandwichById(idSandwich, dataSandwich)
        res.status(200).json({
            message: `Sandwich updated successfully`,
            sandwich: sandwich
        })
    }
    catch(error){
        console.error(`Error while trying to run updateSandwichById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

// Actions by Side dish
export const addSideDish = async (req, res) => {
    try{
        const dataSideDish = req.body
    
        const sideDish = await productService.addSideDish(dataSideDish)
        res.status(201).json({
            message: `Side dish added successfully`,
            sideDish: sideDish
        })
    }
    catch(error){
        console.error(`Error while trying to run addSideDish: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getAllSideDishes = async (req,res) => {
    try{
        const sideDishes = await productService.getAllSideDishes()
        res.status(200).json({
            message: `All side dishes viewed successfully`,
            sideDishes: sideDishes
        })
    }
    catch(error){
        console.error(`Error while trying to run getAllSideDishes: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getSideDishById = async (req, res) => {
    try{
        const idSideDish = req.params.id

        const sideDish = await productService.getSideDishById(idSideDish)
        res.status(200).json({
            message: `Side dish viewed successfully`,
            sideDish: sideDish
        })
    }
    catch(error){
        console.error(`Error while trying to run getSideDishById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteAllSideDishes = async (req, res) => {
    try{
        const sideDishes = await productService.deleteAllSideDishes()
        res.status(200).json({
            message: `All side dishes deleted successfully`,
            sideDishes: sideDishes
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteAllSideDishes: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteSideDishById = async (req, res) => {
    try{
        const idSideDish = req.params.id

        const sideDish = await productService.deleteSideDishById(idSideDish)
        res.status(200).json({
            message: `Side dish deleted successfully`,
            sideDish: sideDish
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteSideDishById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const updateSideDishById = async (req, res) => {
    try{
        const idSideDish = req.params.id
        const dataSideDish = req.body

        const sideDish = await productService.updateSideDishById(idSideDish, dataSideDish)
        res.status(200).json({
            message: `Side dish deleted successfully`,
            sideDish: sideDish
        })
    }
    catch(error){
        console.error(`Error while trying to run updateSideDishById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

// Actions by drink
export const addDrink = async (req, res) => {
    try{
        const dataDrink = req.body
    
        const drink = await productService.addDrink(dataDrink)
        res.status(201).json({
            message: `Drink added successfully`,
            drink: drink
        })
    }
    catch(error){
        console.error(`Error while trying to run addDrink: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getAllDrinks = async (req,res) => {
    try{
        const drinks = await productService.getAllDrinks()
        res.status(200).json({
            message: `All drinks viewed successfully`,
            drink: drinks
        })
    }
    catch(error){
        console.error(`Error while trying to run getAllDrinks: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getDrinkById = async (req, res) => {
    try{
        const idDrink = req.params.id

        const drink = await productService.getDrinkById(idDrink)
        res.status(200).json({
            message: `Drink viewed successfully`,
            drink: drink
        })
    }
    catch(error){
        console.error(`Error while trying to run getDrinkById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteAllDrinks = async (req, res) => {
    try{
        const drinks = await productService.deleteAllDrinks()
        res.status(200).json({
            message: `All drinks deleted successfully`,
            drinks: drinks
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteAllDrinks: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteDrinkById = async (req, res) => {
    try{
        const idDrink = req.params.id

        const drink = await productService.deleteDrinkById(idDrink)
        res.status(200).json({
            message: `Drink deleted successfully`,
            drink: drink
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteDrinkById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const updateDrinkById = async (req, res) => {
    try{
        const idDrink = req.params.id
        const dataDrink = req.body

        const drink = await productService.updateDrinkById(idDrink, dataDrink)
        res.status(200).json({
            message: `Drink deleted successfully`,
            drink: drink
        })
    }
    catch(error){
        console.error(`Error while trying to run updateDrinkById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

// Actions by dessert
export const addDessert = async (req, res) => {
    try{
        const dataDessert = req.body
    
        const dessert = await productService.addDessert(dataDessert)
        res.status(201).json({
            message: `Dessert added successfully`,
            dessert: dessert
        })
    }
    catch(error){
        console.error(`Error while trying to run addDessert: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getAllDesserts = async (req,res) => {
    try{
        const desserts = await productService.getAllDesserts()
        res.status(200).json({
            message: `All desserts viewed successfully`,
            desserts: desserts
        })
    }
    catch(error){
        console.error(`Error while trying to run getAllDesserts: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getDessertById = async (req, res) => {
    try{
        const idDessert = req.params.id

        const dessert = await productService.getDrinkById(idDessert)
        res.status(200).json({
            message: `Dessert viewed successfully`,
            dessert: dessert
        })
    }
    catch(error){
        console.error(`Error while trying to run getDessertById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteAllDesserts = async (req, res) => {
    try{
        const desserts = await productService.deleteAllDesserts()
        res.status(200).json({
            message: `All desserts deleted successfully`,
            desserts: desserts
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteAllDesserts: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteDessertById = async (req, res) => {
    try{
        const idDessert = req.params.id

        const dessert = await productService.deleteDessertById(idDessert)
        res.status(200).json({
            message: `Dessert deleted successfully`,
            dessert: dessert
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteDessertById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const updateDessertById = async (req, res) => {
    try{
        const idDessert = req.params.id
        const dataDessert = req.body

        const dessert = await productService.updateDessertById(idDessert, dataDessert)
        res.status(200).json({
            message: `Dessert deleted successfully`,
            dessert: dessert
        })
    }
    catch(error){
        console.error(`Error while trying to run updateDessertById: ${error}`)
        res.status(400).json({error: error.message})
    }
}