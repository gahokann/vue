export default function(instance) {
    return {
        userInfo() {
            return instance.get('profile/index',)
        },

        fioChange(payload) {
            return instance.patch('profile/settings/fio', payload)
        },

        emailChange(payload) {
            return instance.patch('profile/settings/email', payload)
        },

        phoneChange(payload) {
            return instance.patch('profile/settings/phone', payload)
        },

        passwordChange(payload) {
            return instance.patch('profile/settings/password', payload)
        },

        companyAdd(payload) {
            return instance.post('profile/company/add', payload)
        },

        notification() {
            return instance.get('profile/notification')
        },

        notifIsRead(payload) {
            return instance.patch('profile/notification/isRead', payload)
        },

        notDelete(payload) {
            return instance.post('profile/notification/delete', payload)
        },

        changeImage(payload) {
            return instance.post('profile/changeImage', payload)
        },

        showUser(id) {
            return instance.get(`admin/userShow/${id}`)
        },

        showEmployee(id) {
            return instance.get(`admin/employeeShow/${id}`)
        }


    }
  }
  