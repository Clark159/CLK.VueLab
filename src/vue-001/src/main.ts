// platform 
import { createApp } from '@/modules/fbl/ovp-application'
import { createRouter } from '@/modules/fbl/ovp-application/router'
import { createPinia } from 'pinia'
import configuration from '@/modules/fbl/ovp-configuration'

// application
import './assets/style/main.css'

// main
async function main() {
    
    // configuration
    await configuration.initialize()

    // router
    const router = createRouter()
    router.addRoute({ path: '/:pathMatch(.*)*', redirect: '/home' })

    // pinia
    const pinia = createPinia()

    // build
    const app = createApp()
    app.use(router)
    app.use(pinia)
    app.mount('#app')
}
main().catch((error) => { console.error('啟動失敗', error)})