// import
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// export
export function createStore() {

    // pinia
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)

    // return
    return pinia
}