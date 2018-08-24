import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/vuetify/admin/Index'
import Test from '../components/vuetify/test/Index'
import Home from '../components/vuetify/home/Index'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        }
    ]
})