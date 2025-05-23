// platform 
import { createApp } from '@/modules/fbl/ovp-application'
import { createConfiguration } from '@/modules/fbl/ovp-configuration/plugin'
import { createStore } from '@/modules/fbl/ovp-store/plugin'
import { createRouter } from '@/modules/fbl/ovp-router/plugin'

// application
import './assets/style/main.css'

// main
async function main() {

    // configuration
    const configuration = await createConfiguration()

    // store
    const store = createStore()

    // router
    const router = createRouter()
    router.addRoute({ path: '/', redirect: '/home' })
    router.addRoute({ path: '/:pathMatch(.*)*', redirect: '/not-found' })

    // application
    const app = createApp()
    app.use(store)
    app.use(router)
    app.mount('#app')
}
main().catch((error) => { console.error('啟動失敗', error) })