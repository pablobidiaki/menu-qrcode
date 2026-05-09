import express from "express"

import * as productService from "../services/productService.js"

export const addProduct = async (req, res) => {
    try{
        const dataProduct = req.body
    
        const product = await productService.addProduct(dataProduct)
        res.status(201).json({
            message: `Product added successfully`,
            product: product
        })
    }
    catch(error){
        console.error(`Error while trying to run addProduct: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getAllProducts = async (req,res) => {
    try{
        const products = await productService.getAllProducts()
        res.status(200).json({
            message: `Products viewed successfully`,
            products: products
        })
    }
    catch(error){
        console.error(`Error while trying to run getAllProducts: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const getProductById = async (req, res) => {
    try{
        const idProduct = req.params.id

        const product = await productService.getProductById(idProduct)
        res.status(200).json({
            message: `Product viewed successfully`,
            product: product
        })
    }
    catch(error){
        console.error(`Error while trying to run getProductById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteAllProducts = async (req, res) => {
    try{
        const products = await productService.deleteAllProducts()
        res.status(200).json({
            message: `All Products deleted successfully`,
            products: products
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteAllProducts: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const deleteProductById = async (req, res) => {
    try{
        const idProduct = req.params.id

        const product = await productService.deleteProductById(idProduct)
        res.status(200).json({
            message: `Product deleted successfully`,
            product: product
        })
    }
    catch(error){
        console.error(`Error while trying to run deleteProductById: ${error}`)
        res.status(400).json({error: error.message})
    }
}

export const updateProductById = async (req, res) => {
    try{
        const idProduct = req.params.id
        const dataProduct = req.body

        const product = await productService.updateProductById(idProduct, dataProduct)
        res.status(200).json({
            message: `Product updated successfully`,
            product: product
        })
    }
    catch(error){
        console.error(`Error while trying to run updateProductById: ${error}`)
        res.status(400).json({error: error.message})
    }
}