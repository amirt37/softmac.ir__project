import { createApp } from 'vue'
import AppHome from './AppHome.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(AppHome)
app.use(router)
app.mount('#app')
