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
    }
  }
  