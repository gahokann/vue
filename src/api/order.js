export default function(instance) {
    return {
        orderAll() {
            return instance.get('order/index')
        }
    }
}