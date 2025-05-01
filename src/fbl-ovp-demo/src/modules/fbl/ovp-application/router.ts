// import
import { createRouter as createVueRouter, createWebHistory as createVueWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

// export
export function createRouter() {

    // createRouter
    return createVueRouter({
        history: createVueWebHistory(import.meta.env.BASE_URL),
        routes: routes
    })
}