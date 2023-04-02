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
        
    }
  }
  