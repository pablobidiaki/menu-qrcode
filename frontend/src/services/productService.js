import api from "./api";

export const productService = {
    getSandwiches: async () => {
        const response = await api.get('/product/sandwich')
        return response.data
    },
    getSideDishes: async () => {
        const response = await api.get('/product/sideDish')
        return response.data
    },
    getDrinks: async () => {
        const response = await api.get('/product/drink')
        return response.data
    },
    getDesserts: async () => {
        const response = await api.get('/product/dessert')
        return response.data
    }
}