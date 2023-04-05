export default function (instance) {
    return {
        orderUser() {
            return instance.get("profile/orderUser");
        },

        createOrder(payload) {
            return instance.post("order/store", payload);
        },

        getOrderFirst(id) {
            return instance.get(`order/show/${id}`)
        }
        
    };
}
