
// import
import vueRouter from 'unplugin-vue-router/vite'

// export
export function fblRouter() {
  return vueRouter({
    dts: 'src/app.routes.d.ts',
    routesFolder: 'src/pages',
    extensions: ['.vue'],
    exclude: ['**/!(*Page).vue'],
  })
}