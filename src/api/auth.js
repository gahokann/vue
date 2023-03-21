export default function(instance) {
    return {
        auth(payload) {
            return instance.post('login', payload)
        },
        reg(payload) {
            return instance.post('register', payload)
        },
        logout() {
            return instance.delete('logout')
        }
    }
  }
  