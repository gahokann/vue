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
            children: [
                {
                    path: '/',
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
            ]
        },
    ]
})