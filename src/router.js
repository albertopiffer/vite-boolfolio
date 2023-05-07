import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
// import Contacts from './pages/Contacts.vue'
// import 404 from './pages/404.vue'

const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        // 	path: '/404',
        // 	name: '404',
        // 	component: NotFound,
        // },
    ],
})

export { router }