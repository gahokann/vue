import instance from './instance'

import authModule from './plugins/auth'
import userModule from './plugins/user'
import orderModule from './plugins/order'
import adminModule from './plugins/admin'

export default {
    auth: authModule(instance),
    user: userModule(instance),
    order: orderModule(instance),
    admin: adminModule(instance)
}

