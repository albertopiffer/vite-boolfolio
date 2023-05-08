import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import About from './pages/About.vue'

import ProjectsShow from './pages/Show.vue'

// import 404 from './pages/404.vue'

const history = createWebHistory()

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
        {
            path: '/about',
            name: 'about',
            component: About,
        },

        {
            path: '/portfolio/:slug',
            name: 'show',
            component: ProjectsShow,
            props: true,
        },

        // 	path: '/404',
        // 	name: '404',
        // 	component: NotFound,
        // },
    ],
})

export { router }