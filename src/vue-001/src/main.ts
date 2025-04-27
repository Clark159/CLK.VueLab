// application
import './assets/main.css'

// platform 
import { createApp } from '@/modules/fbl/ovp-application'
import { createRouter } from '@/modules/fbl/ovp-application/router'
import { createPinia } from 'pinia'

// pinia
const pinia = createPinia()

// router
const router = createRouter()
router.addRoute({  path: '/:pathMatch(.*)*',  redirect: '/home' })

// build
const app = createApp()
app.use(pinia)
app.use(router)
app.mount('#app')