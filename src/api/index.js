import instance from './instance'

import authModule from './auth'
import orderModule from './order'
import userModule from './user'

export default {
    auth: authModule(instance),
    order: orderModule(instance),
    user: userModule(instance),
}

