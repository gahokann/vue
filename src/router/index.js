import store from '../store/index'
import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AuthPage from '../pages/AuthPage.vue'
import RegPage from '../pages/RegPage.vue'
import PartnersPage from '../pages/PartnersPage.vue'
import ProfileDefaultPage from '../pages/profile/DefaultPage.vue'
import ProfileIndexPage from '../pages/profile/IndexPage.vue'
import ProfileSettingsPage from '../pages/profile/SettingsPage.vue'
import ProfileCompanyPage from '../pages/profile/CompanyPage.vue'
import ProfileAllOrderPage from '../pages/profile/AllOrderPage.vue'
import ProfileOrderPage from '../pages/profile/OrderPage.vue'
import ProfileOrderCreatePage from '../pages/profile/OrderCreatePage.vue'
import AdminUsers from '../pages/admin/UserPage.vue'
import AdminEmployee from '../pages/admin/EmployeePage.vue'
import AdminOrder from '../pages/admin/AllOrderPage.vue'
import AdminCompany from '../pages/admin/CopmanyPage.vue'
import AdminPartner from '../pages/admin/PartnerPage.vue'
import AdminPerson from '../pages/admin/EmployeePersonPage.vue' //Админ
import AdminClientPerson from '../pages/admin/ClientPersonPage.vue' // Пользоавтель
import AdminJobOrderPage from '../pages/admin/JobOrderPage.vue'
import Notifications from '../pages/profile/NotificationsPage.vue'
import NotFound from '../pages/layouts/NotFound.vue'



export default new VueRouter ({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'main',
            component: MainPage,
            meta: {
                title: 'Главная'
            }
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthPage,
        },
        {
            path: '/reg',
            name: 'reg',
            component: RegPage,
        },
        {
            path: '/partners',
            name: 'partners',
            component: PartnersPage,
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileDefaultPage,
            beforeEnter: (to, from, next) => {
                if(store.getters.isAuthenticated) {
                    next()
                } else {
                    next({name: 'main'})
                }
            },
            children: [
                {
                    path: '/user',
                    name: 'profileMain',
                    component: ProfileIndexPage,
                    meta: {
                        ProfileMain: true
                    }
                },
                {
                    path: '/settings',
                    name: 'profileSettings',
                    component: ProfileSettingsPage,
                },
                {
                    path: '/company',
                    name: 'profileCompany',
                    component: ProfileCompanyPage,
                },
                {
                    path: '/notifications',
                    name: 'notifications',
                    component: Notifications,
                },
                {
                    path: '/allOrders',
                    name: 'profileAllOrders',
                    component: ProfileAllOrderPage,
                },
                {
                    path: '/order/:id',
                    name: 'order',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isAuthenticated && store.getters.isСustomer || store.getters.isEmployee) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: ProfileOrderPage,
                },
                {
                    path: '/orderCreate',
                    name: 'orderCreate',
                    component: ProfileOrderCreatePage,
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isAuthenticated && store.getters.isСustomer || store.getters.isEmployee) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                },
                
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: ProfileDefaultPage,
            beforeEnter: (to, from, next) => {
                if(store.getters.isEmployee && store.getters.isAuthenticated) {
                    next()
                } else {
                    next({name: 'profileMain'})
                }
            },
            children: [
                // !ADMIN PAGE
                {
                    path: '/admin/users',
                    name: 'adminUsers',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isChief) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: AdminUsers,
                },
                {
                    path: '/admin/employee',
                    name: 'adminEmployee',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isChief) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: AdminEmployee,
                },
                {
                    path: '/admin/order',
                    name: 'adminOrder',
                    component: AdminOrder,
                },
                {
                    path: '/admin/company',
                    name: 'adminCompany',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isChief) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: AdminCompany,
                },
                {
                    path: '/admin/partners',
                    name: 'adminPartners',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isChief) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: AdminPartner,
                },
                {
                    path: '/admin/personClient/:id',
                    name: 'adminClientPerson',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isChief) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: AdminClientPerson,
                },
                {
                    path: '/admin/person/:id',
                    name: 'adminPerson',
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isChief) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                    component: AdminPerson,
                },
                {
                    path: 'admin/jobOrderPage',
                    name: 'adminJobOrder',
                    component: AdminJobOrderPage,
                    beforeEnter: (to, from, next) => {
                        if(store.getters.isAuthenticated && store.getters.isEmployee) {
                            next()
                        } else {
                            next({name: 'profileMain'})
                        }
                    },
                },
            ]
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})