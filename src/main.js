import { createApp } from 'vue'
import router from './router/router.js'
import 'reset-css'
import '@/assets/scss/style.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')

