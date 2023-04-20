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
        },

        partnerAll() {
            return instance.get('admin/partnerAll')
        },

        companyStatus(payload) {
            return instance.post('admin/companyStatus', payload)
        },

        addPartner(payload) {
            return instance.post('admin/partnerStore', payload)
        },

        delPartner(payload) {
            return instance.post('admin/partnerDelete', payload)
        },

        orderEmployee() {
            return instance.get('admin/orderEmployee')
        },

        changeRole(payload) {
            return instance.post('admin/changeRole', payload)
        },

        orderWork(payload) {
            return instance.post('admin/orderWork', payload)
        },

        removeEmployeeOrder(payload) {
            return instance.post('admin/removeEmployeeOrder', payload)
        },

        changeStatusOrder(payload) {
            return instance.post('admin/orderStatus', payload)
        }
        
    }
  }
  