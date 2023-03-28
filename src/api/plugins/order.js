export default function (instance) {
    return {
        orderUser() {
            return instance.get("profile/orderUser");
        },
    };
}
