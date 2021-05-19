import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio'
import Menu from '../views/Menu'
import Jogar from '../views/Jogar'
import Recordes from '../views/Recordes'
import Tutorial from '../views/Tutorial'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu,
    },
    {
        path: '/play',
        name: 'Play',
        component: Jogar,
    },
    {
        path: '/tutorial',
        name: 'Tutorial',
        component: Tutorial,
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: Recordes,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
