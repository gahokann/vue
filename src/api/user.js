export default function(instance) {
    return {
        userInfo() {
            return instance.get('profile/index',)
        },
        orderAll() {
            return instance.get('order/index')
        }
    }
  }
  