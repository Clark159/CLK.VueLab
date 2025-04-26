// application
import './assets/main.css'
import App from '@/modules/fbl/ovp-application/app'

// platform 
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// router
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
router.addRoute({  path: '/:pathMatch(.*)*',  redirect: '/home', })

// build
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
