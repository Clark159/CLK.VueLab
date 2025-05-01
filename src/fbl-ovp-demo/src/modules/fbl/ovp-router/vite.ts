
// import
import vueRouter from 'unplugin-vue-router/vite'

// export
export default function ovpRouter() {

    // vueRouter
    return vueRouter({
        dts: 'src/main.routes.d.ts',
        routesFolder: 'src/pages',
        extensions: ['.vue'],
        exclude: ['**/!(*Page).vue'],
    })
}