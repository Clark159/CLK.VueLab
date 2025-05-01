// import
import { createApp as createVueApp } from 'vue'
import App from './components/App.vue'

// export
export function createApp() {

    // createApp
    return createVueApp(App)
}