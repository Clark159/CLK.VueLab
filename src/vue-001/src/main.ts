// application
import './assets/main.css'

// platform 
import { createApp } from '@/modules/fbl/ovp-application'
import { createRouter } from '@/modules/fbl/ovp-application/router'
import { createPinia } from 'pinia'

// router
const router = createRouter()
router.addRoute({  path: '/:pathMatch(.*)*',  redirect: '/home' })

// pinia
const pinia = createPinia()

// build
const app = createApp()
app.use(router)
app.use(pinia)
app.mount('#app')