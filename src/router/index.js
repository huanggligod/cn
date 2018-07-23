import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list'
import Home from '@/pages/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/list',
            name: 'list',
            component: List
        }
    ]
})
