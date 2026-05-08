import api from "./api";

export const orderService = {
    create: async (orderData) => {
        const response  = await api.post('/order', orderData)
        return response.data
    }
}