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
import ProfileActiveOrderPage from '../pages/profile/ActiveOrderPage.vue'
import ProfileOrderPage from '../pages/profile/OrderPage.vue'
import ProfileOrderCreatePage from '../pages/profile/OrderCreatePage.vue'
import AdminUsers from '../pages/admin/UserPage.vue'
import AdminEmployee from '../pages/admin/EmployeePage.vue'
import AdminOrder from '../pages/admin/AllOrderPage.vue'
import AdminCompany from '../pages/admin/CopmanyPage.vue'
import AdminPartner from '../pages/admin/PartnerPage.vue'
import AdminPerson from '../pages/admin/EmployeePersonPage.vue'
import AdminClientPerson from '../pages/admin/ClientPersonPage.vue'
import NotFound from '../pages/NotFound.vue'


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
                    path: '/allOrders',
                    name: 'profileAllOrders',
                    component: ProfileAllOrderPage,
                },
                {
                    path: '/activeOrders',
                    name: 'profileActiveOrders',
                    component: ProfileActiveOrderPage,
                },
                {
                    path: '/order',
                    name: 'order',
                    component: ProfileOrderPage,
                },
                {
                    path: '/orderCreate',
                    name: 'orderCreate',
                    component: ProfileOrderCreatePage,
                },
                
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: ProfileDefaultPage,
            beforeEnter: (to, from, next) => {
                if(store.getters.isAdmin && store.getters.isAuthenticated) {
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
                    component: AdminUsers,
                },
                {
                    path: '/admin/employee',
                    name: 'adminEmployee',
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
                    component: AdminCompany,
                },
                {
                    path: '/admin/partners',
                    name: 'adminPartners',
                    component: AdminPartner,
                },
                {
                    path: '/admin/person',
                    name: 'adminPerson',
                    component: AdminPerson,
                },
                {
                    path: '/admin/personClient',
                    name: 'adminClientPerson',
                    component: AdminClientPerson,
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