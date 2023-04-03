export default function(instance) {
    return {
        allUsers() {
            return instance.get('admin/allUser')
        },

        employees() {
            return instance.get('admin/employees')
        },

        roles() {
            return instance.get('admin/roles')
        },

        orderAll() {
            return instance.get('admin/orderAll')
        },

        companyAll() {
            return instance.get('admin/companyAll')
        }
        
    }
  }
  