// application
import './assets/main.css'

// platform 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from '@/modules/fbl/ovp-application/router'
import App from '@/modules/fbl/ovp-application/app'

// pinia
const pinia = createPinia()

// router
const router = createRouter()
router.addRoute({  path: '/:pathMatch(.*)*',  redirect: '/home', })

// build
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
