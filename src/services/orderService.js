import apiClient from "./apiClient"

const orderService = {
    getProducts : async () => {
        try {
            const response = await apiClient({
                method : 'get',
                url : "/products"
            })
            return response.data
        } catch (error) {
            console.log("Error Get Products : ",error);            
            throw error
        }
    },

    createOrder : async (customerId, orderDetails) => {
        try {
            const payload = {
                customerId,
                details : orderDetails.map((item) => ({
                    productId : item.value,
                    qty : item.quantity
                }))
            }
            const response = await apiClient({
                method : "post",
                url : "/transactions",
                params : payload
            })
            return response
        } catch (error) {
            console.log("Error create transaction  : ", error);            
            throw error
        }
    }
}

export default orderService