// platform 
import { createApp } from '@/modules/fbl/ovp-application'
import { createRouter } from '@/modules/fbl/ovp-application/plugin'
import { createStore } from '@/modules/fbl/ovp-store/plugin'
import { createConfiguration } from '@/modules/fbl/ovp-configuration'

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

    // build
    const app = createApp()
    app.use(store)
    app.use(router)
    app.mount('#app')
}
main().catch((error) => { console.error('啟動失敗', error) })